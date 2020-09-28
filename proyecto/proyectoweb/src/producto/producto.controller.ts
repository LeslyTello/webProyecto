import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    InternalServerErrorException,
    Param,
    Post, Query, Req, Res
} from "@nestjs/common";
import {ProductoService} from "./producto.service";
import {ProductoCreateDto} from "./dto/producto.create.dto";
import {validate} from "class-validator";
import {ProductoUpdateDto} from "./dto/producto.update.dto";
import {CategoriaService} from "../categoria/categoria.service";

@Controller('producto')
export class ProductoController{

    constructor(
        private readonly _productoService:ProductoService,
        private readonly _categoriaService:CategoriaService
    ) {
    }


    //Mostrar todos los productos
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



    @Get('/:nombre')
    async mostrarPasteles(
        @Res() response,
        @Param() parametroRuta
    ){

        let producto
        //   return res.render('product')
        try{
            if(parametroRuta.nombre=='todos'){
                const respuesta=await this._productoService.buscarProductosImagen()
                const categorias=await this._categoriaService.buscarNombreCategoria()

                return response.render('product',{
                    productoImagen:respuesta,
                    categorias:categorias,
                    busqueda:parametroRuta
                })

            }else{
                const idCategoria=await this._categoriaService.buscarIdPorNombre(parametroRuta.nombre)
                const respuesta=await this._productoService.buscarPorCategoria(idCategoria[0].id)
                const categorias=await this._categoriaService.buscarNombreCategoria()

                return response.render('product',{
                        productoImagen:respuesta,
                        categorias:categorias,
                        busqueda:parametroRuta
                    }

                )
            }

        }catch (e) {
            throw new BadRequestException('Error en servidor')
        }
    }








    //Crear un nuevo producto
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
            productoValidar.categoria=parametros.categoria

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
                throw new InternalServerErrorException('Error en el servidor')
            }

        }


    }


    //modificar un producto

    @Post('/:id')
    @HttpCode(201)
    async modificarProducto(
        @Body() parametros,
        @Param()  parametroRuta
    ){
        let producto
        try{
            //Validar las entradas
            const productoValidar= new ProductoUpdateDto()
            productoValidar.codigo=parametros.codigo
            productoValidar.descripcion=parametros.descripcion
            productoValidar.nombre=parametros.nombre
            productoValidar.precio=parametros.precio
            productoValidar.cantidad=parametros.cantidad
            productoValidar.fechaInicio=parametros.fechaInicio
            productoValidar.fechaFin=parametros.fechaFin
            productoValidar.categoria=parametros.categoria
            productoValidar.id=Number(parametroRuta.id)

            const errores=await validate(productoValidar)
            if(errores.length>0){
                console.log('Errores', errores)
                throw new BadRequestException('Error con class-validator')
            }else{
                producto=productoValidar

            }
        }catch(e){
            throw new BadRequestException('Error con class-validator')
        }

        if(producto){
            try{
                const respuesta=await this._productoService.modificarUnProducto(producto)
                return respuesta
            }catch (e) {
                throw new InternalServerErrorException('Error en el servidor')
            }

        }
    }


    //BUSQUEDA DE UN SOLO PRODUCTO
    @Get('busqueda/:id')
    async mostrar2
    (
        @Res() res,
        @Param() parametroRuta
    ){
       try{
           const respuesta=await this._productoService.mostrarUnProducto(Number(parametroRuta.id))
           if(respuesta!=undefined){
               return res.render('single', {
                       producto: respuesta
                   }
               )
           }else{
               res.redirect('../../inicio?mensaje=error')
           }

       }catch (e) {
           res.redirect('../../inicio?mensaje=error')
       }


    }









}