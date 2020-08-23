import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('imagen_producto')
export class ImagenProductoEntity{

    @PrimaryGeneratedColumn({
        name:'id_imagen_producto',
        type:'int'
    })
    id:number

    @Column({
        type:'varchar',
        length:'200',
        name:'url_Foto'
    })
    url:string
}