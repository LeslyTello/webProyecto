import {BadRequestException, Body, Controller, Get, HttpCode, Param, Post} from "@nestjs/common";
import {CategoriaService} from "./categoria.service";
import {CategoriaCreateDto} from "./dto/categoria.create.dto";
import {validate} from "class-validator";
import {CategoriaUpdateDto} from "./dto/categoria.update.dto";

@Controller('categoria')
export class CategoriaController{

    constructor( private readonly _categoriaService:CategoriaService) {
    }

    //Mostrar todos los datos de la entidad
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


    //Crear una nueva categoria
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
                throw new BadRequestException('Error en los datos')


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


    //Busqueda de nombres de categorias
    @Get('nombre')
    nombre(){
        return this._categoriaService.buscarNombreCategoria()
    }

    //Obtener el ID de la categoria por nombre
    @Get('nombre/:nombre')
    obtener(
        @Param() parametro
    ){
      return this._categoriaService.buscarIdPorNombre(parametro.nombre)
    }

    //Modificar una categoria
    @Post('/:id')
    @HttpCode(200)
    async modificarCategoria(@Body() parametros,
                             @Param() parametroRuta){
        let categoriaModificada
        try{
            const categoriaValidar=new CategoriaUpdateDto()
            categoriaValidar.nombre=parametros.nombre
            categoriaValidar.id=Number(parametroRuta.id)
            const errores= await validate(categoriaValidar)
            if(errores.length>0){
                console.log('Errores', errores)
                throw new BadRequestException('Error en los datos')


            }else{
                categoriaModificada=categoriaValidar

            }

        }catch (e) {
            throw new BadRequestException('Error en los datos ')
        }

        if(categoriaModificada){
            try{
                const respuesta= await this._categoriaService.modificarUnaCategoria(categoriaModificada)
                return respuesta
            }catch (e) {
                throw new BadRequestException('Error en el servidor')
            }
        }

    }


    //Eliminar una categoria
    @Post('eliminar/:id')
    async eliminarDesdeVista(
        @Param() parametroRuta,

    ){
        try{
            const id= Number(parametroRuta.id)
           const respuesta= await this._categoriaService.eliminarUnaCategoria(id)
            return respuesta

        }catch (e) {
            console.log(e)


        }
    }
}