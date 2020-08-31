import {BadRequestException, Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import {ProductoService} from "./producto.service";
import {ProductoCreateDto} from "./dto/producto.create.dto";
import {validate} from "class-validator";

@Controller('producto')
export class ProductoController{

    constructor(
        private readonly _productoService:ProductoService
    ) {
    }


    @Get()
    @HttpCode(200)
    async mostrarProductos(){
        try{
            const respuesta=await this._productoService.buscarTodosProductos()
            return respuesta
        }catch (e) {
            throw new BadRequestException('Error en servidor')
        }
    }

    @Post()
    @HttpCode(201)
    async crearProducto(
        @Body() parametros
    ){
        let producto
        try{
            //Validar las entradas
            const productoValidar= new ProductoCreateDto()
            productoValidar.codigo=parametros.codigo
            productoValidar.descripcion=parametros.descripcion
            productoValidar.nombre=parametros.nombre
            productoValidar.precio=parametros.precio
            productoValidar.cantidad=parametros.cantidad
            productoValidar.fechaInicio=parametros.fechaInicio
            productoValidar.fechaFin=parametros.fechaFin

            const errores=await validate(productoValidar)
            if(errores.length>0){
                console.log('Errores', errores)
                return 'Error en datos'
            }else{
                producto=productoValidar
            }
        }catch(e){
                throw new BadRequestException('Error con class-validator')
        }

        if(producto){
            try{
                const respuesta=await this._productoService.crearUnProducto(producto)
                return respuesta
            }catch (e) {
                throw new BadRequestException('Error en el servidor')
            }

        }


    }



}