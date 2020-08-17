import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('rol')
export class RolEntity {


    @PrimaryGeneratedColumn({

    comment:'Identificador del rol',
    name:'id_rol'}

    )
    id:number

    @Column({
        name:'nombre_rol'
        }

    )
    nombre:string
}