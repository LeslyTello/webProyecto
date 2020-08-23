import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}