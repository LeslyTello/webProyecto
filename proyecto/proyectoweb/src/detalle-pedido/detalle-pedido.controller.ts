import {Body, Controller, Get, Post} from "@nestjs/common";
import {DetallePedidoService} from "./detalle-pedido.service";

@Controller('detalle')
export class DetallePedidoController{
constructor(
    private readonly _detallePedidoService:DetallePedidoService
) {
}

    @Get()
    mostrar(){
    return this._detallePedidoService.mostrarTodos()
    }


    @Post()
    async crearDetalle(
        @Body() parametros

    ){
        try{
          const res=await this._detallePedidoService.crearDetallePedido(parametros)
            return parametros
        }catch (e) {
            console.log(e)
        }
    }


}