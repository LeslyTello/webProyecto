import {Body, Controller, Get, InternalServerErrorException, Post} from "@nestjs/common";
import {ImagenProductoService} from "./imagen-producto.service";

@Controller('imagen')
export class ImagenProductoController{

    constructor(
        private readonly _imagenProductoService:ImagenProductoService
    ){

    }

    @Post()
    async crearImagen(
        @Body() parametrosCuerpo
    ){
        try{

            console.log(parametrosCuerpo)
            const respuesta=await this._imagenProductoService.crearImagenProducto(parametrosCuerpo)

            return respuesta
        }catch (e) {
            console.log('Errores',e)
            throw new InternalServerErrorException('Error en el servidor')
        }
    }

    @Get()
    async mostrar(){
        return this._imagenProductoService.buscarTodosImagenProducto()
    }

}