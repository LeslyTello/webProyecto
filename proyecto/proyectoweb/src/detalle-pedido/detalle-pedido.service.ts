import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {DetallePedidoEntity} from "./detalle-pedido.entity";

export class DetallePedidoService {
    constructor(@InjectRepository(DetallePedidoEntity)
                private repositorioDetallePedido: Repository<DetallePedidoEntity>
    ) {
    }

    crearDetallePedido(detalle:DetallePedidoEntity){
        return this.repositorioDetallePedido.save(detalle)
    }
    mostrarTodos(){
        return this.repositorioDetallePedido.find()
    }

    buscarTodaRelacion(){
        let peticion

        peticion={
            relations:['producto']
        }

        return this.repositorioDetallePedido.find(peticion)
    }
}