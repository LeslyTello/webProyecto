import {InjectRepository} from "@nestjs/typeorm";
import {PagoEntity} from "../pago/pago.entity";
import {Repository} from "typeorm";
import {PedidoEntity} from "./pedido.entity";

export class PedidoService{
    constructor(@InjectRepository(PedidoEntity)
                private repositorioPedido: Repository<PedidoEntity>) {
    }
}