import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PedidoEntity} from "./pedido.entity";
import {PedidoController} from "./pedido.controller";
import {PedidoService} from "./pedido.service";

@Module({
    imports:[
    TypeOrmModule.forFeature(
        [PedidoEntity],
        'default' //nombre de la cadena de conexion
    )],
    providers:[PedidoService],
    controllers:[PedidoController]}
)
export class PedidoModule{

}