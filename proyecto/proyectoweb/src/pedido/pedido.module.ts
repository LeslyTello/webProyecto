import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PedidoEntity} from "./pedido.entity";
import {DetallePedidoService} from "../detalle-pedido/detalle-pedido.service";
import {PedidoController} from "./pedido.controller";

@Module({
    imports:[
    TypeOrmModule.forFeature(
        [PedidoEntity],
        'default' //nombre de la cadena de conexion
    )],
    providers:[DetallePedidoService],
    controllers:[PedidoController]}
)
export class PedidoModule{

}