import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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


}