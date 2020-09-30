import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PedidoEntity} from "../pedido/pedido.entity";
import {ProductoEntity} from "../producto/producto.entity";

@Entity('detalle_pedido')
export class DetallePedidoEntity{

    @PrimaryGeneratedColumn({
        name:'id_detalle',
        type:'int'
    })
    id:number

    @Column({
        type:'int',
        name:'cantidad_producto'
    })
    cantidad:number

    @Column({
        name:'valor_unitario_producto',
        type:'float'
    })
    valorUnitario:number

    @Column({
        name:'valor_total_producto',
        type:'float'
    })
    valorTotal:number

    @ManyToOne(
        type => PedidoEntity,
        pedido=>pedido.detallesPedido
    )
    @JoinColumn({name: 'id_pedido'})
    pedido:PedidoEntity


    @ManyToOne(
        type=>ProductoEntity,
        producto=>producto.detallesProducto
    )
    @JoinColumn({name: 'id_producto'})
    producto:ProductoEntity


}