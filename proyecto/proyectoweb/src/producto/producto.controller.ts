import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    InternalServerErrorException,
    Param,
    Post, Query, Res, Session
} from "@nestjs/common";
import {ProductoService} from "./producto.service";
import {ProductoCreateDto} from "./dto/producto.create.dto";
import {validate} from "class-validator";
import {ProductoUpdateDto} from "./dto/producto.update.dto";

@Controller('productos')
export class ProductoController{

    constructor(
        private readonly _productoService:ProductoService
    ) {
    }


    //Mostrar todos los productos
    @Get()
    async productos(
        @Res() res,
        @Session() session,
        @Body() parametrosCuerpo,
        @Query() parametrosConsulta
    ){
        if(typeof session == undefined){
            res.render('product');
        } else {
            let productos
            try {
                if(parametrosConsulta.busqueda !== undefined){
                    productos = await this._productoService.buscarTodosProductos(parametrosConsulta.busqueda);
                } else {
                    productos = await this._productoService.buscarTodosProductos();
                }
            } catch (error) {
                throw new InternalServerErrorException('Error encontrando productos')
            }
            if(productos){
                console.log(productos)
                res.render(
                    'product', {
                        nombre: session.nombre,
                        productos: productos
                    }
                );
            } {
                throw new InternalServerErrorException('Error encontrando productos')
            }
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




}