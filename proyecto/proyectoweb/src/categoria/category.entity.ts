import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "../producto/producto.entity";

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

    @ManyToOne(
        type => ProductoEntity,
        producto=>producto.categoria
    )
    productos:ProductoEntity[]
}