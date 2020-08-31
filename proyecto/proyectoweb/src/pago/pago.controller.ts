import {BadRequestException, Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import {PagoService} from "./pago.service";

@Controller('pago')
export class PagoController{
    constructor(
        private readonly _pagoService:PagoService
    ) {
    }

    @Get()
    async mostrarTodos(){
        try{
            return await this._pagoService.mostrarTodosPago()
        }catch (e) {
            throw new BadRequestException('Error en servidor')
        }

    }

    @Post()
    @HttpCode(201)
    async crearPago(
        @Body() parametros
    ){
        try{
            const respuesta=await this._pagoService.crearPago(parametros)
            return respuesta
        }catch (e) {
            console.log(e)
            throw new BadRequestException('Error en servidor')
        }
    }
}