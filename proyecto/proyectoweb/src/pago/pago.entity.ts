import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PedidoEntity} from "../pedido/pedido.entity";

@Entity('pago')
export class PagoEntity{


    @PrimaryGeneratedColumn({
        type:'int',
        name:'id_pago'
    })
    id:number

    @Column({
        type:'varchar',
        length:'50',
        name:'tipo_pago'
    })
    tipoPago:string


    @OneToMany(
        type => PedidoEntity,
        pedido=>pedido.pago
    )
    pedidos:PedidoEntity[]

}