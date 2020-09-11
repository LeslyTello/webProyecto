import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PedidoEntity} from "./pedido.entity";

export class PedidoService{
    constructor(@InjectRepository(PedidoEntity)
                private repositorioPedido: Repository<PedidoEntity>) {
    }

    crearUnPedido(pedido:PedidoEntity){
        return this.repositorioPedido.save(pedido)
    }

    mostrarTodosPedido(){
        return this.repositorioPedido.find()
    }

    eliminarUnPedido(id:number){
        return this.repositorioPedido.delete(id)
    }

    modificarPedido(pedidoModificado:PedidoEntity){
        return this.repositorioPedido.save(pedidoModificado)
    }

    buscarTodaRelacion(){
        let peticion

        peticion={
                relations:['detallesPedido']
        }

        return this.repositorioPedido.find(peticion)
    }
}