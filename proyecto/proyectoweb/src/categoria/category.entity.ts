import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('categoria')
export class CategoryEntity{

    @PrimaryGeneratedColumn({
        name:'id_categoria',
        type:'int'
    })
    id:number

    @Column({
        type:'varchar',
        length:'100',
        name:'nombre_categoria'
    })
    nombre:string
}