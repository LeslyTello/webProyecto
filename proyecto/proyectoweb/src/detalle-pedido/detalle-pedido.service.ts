import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {DetallePedidoEntity} from "./detalle-pedido.entity";

export class DetallePedidoService {
    constructor(@InjectRepository(DetallePedidoService)
                private repositorioDetallePedido: Repository<DetallePedidoEntity>
    ) {
    }
}