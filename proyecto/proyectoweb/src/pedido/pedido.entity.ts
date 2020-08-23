import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PagoEntity} from "../pago/pago.entity";

@Entity('pedido')
export class PedidoEntity{


    @PrimaryGeneratedColumn({
        type:'int',
        name:'id_pedido'
    })
    id:number


    @Column({
        name:'fecha_pedido',
        type:'date'
    })
    fechaPedido: string


    @Column({
        name:'subtotal_pedido',
        type:'float',

    })
    subtotal:number


    @Column({
        name:'iva_pedido',
        type:'float',

    })
    iva:number


    @Column({
        name:'total_pedido',
        type:'float',

    })
    total:number


    @Column({
        name:'estado_pedido',
        type:'varchar',
        length:'50'

    })
    estado:string

    @ManyToOne(
        type=>PagoEntity,
        pago=>pago.pedidos
    )
    pago:PagoEntity




}