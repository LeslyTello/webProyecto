import {BadRequestException, Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import {CategoriaService} from "./categoria.service";
import {CategoriaCreateDto} from "./dto/categoria.create.dto";
import {validate} from "class-validator";

@Controller('categoria')
export class CategoriaController{

    constructor( private readonly _categoriaService:CategoriaService) {
    }

    @Get()
    @HttpCode(200)
    async mostrarTodos(){
        try{
            const respuesta=await this._categoriaService.buscarTodosCategoria()
            return respuesta

        }catch (e) {
            throw new BadRequestException('Error en el servidor')
        }
    }


    @Post()
    @HttpCode(201)
   async  crearUnaCategoria(
        @Body() parametros
    ){
        let categoriaNueva
        try{
            const categoriaValidar=new CategoriaCreateDto()
            categoriaValidar.nombre=parametros.nombre
            const errores= await validate(categoriaValidar)
            if(errores.length>0){
                console.log('Errores', errores)
            }else{
                categoriaNueva=categoriaValidar
            }

        }catch (e) {
            throw new BadRequestException('Error en los datos ')
        }

        if(categoriaNueva){
            try{
                const respuesta= await this._categoriaService.crearUnaCategoria(categoriaNueva)
                return respuesta
            }catch (e) {
                throw new BadRequestException('Error en el servidor')
            }
        }

    }
}