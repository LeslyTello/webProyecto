import {Body, Controller, Get, Post} from "@nestjs/common";
import {PedidoService} from "./pedido.service";

@Controller('pedido')
export class PedidoController{


    constructor(
        private readonly _pedidoService:PedidoService
    ) {
    }
    @Post()
    async crear(
        @Body() parametros
    ){
        try{
            const res=await this._pedidoService.crearUnPedido(parametros)
            return res
        }catch (e) {
            console.log(e)
        }
    }


    @Get()
    async mostrar(){
        return this._pedidoService.mostrarTodosPedido()
    }

    @Get('relacion')
    async mostrarRelacion(){
        return this._pedidoService.buscarTodaRelacion()
    }

}