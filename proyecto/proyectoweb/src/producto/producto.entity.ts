import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ImagenProductoEntity} from "../imagen-producto/imagen-producto.entity";
import {CategoryEntity} from "../categoria/category.entity";
import {DetallePedidoEntity} from "../detalle-pedido/detalle-pedido.entity";

@Entity('producto')
export class ProductoEntity{

    @PrimaryGeneratedColumn({

        comment:'Identificador del rol',
        name:'id_rol'}

    )
    id:number

    @Column({
        name:'codigo_producto',
        type:'varchar',
        length:20
        }

    )
    codigo:string


    @Column({
        name:'nombre_producto',
        type:'varchar',
        length:20
    })

    nombre:string


    @Column({
        name:'descripcion_producto',
        type:'varchar',
        length:20
        }

    )
    descripcion:string

    @Column({
        type:'float',
        name:'precio_producto'
    })
    precio:number

    @Column({
        type:'int',
        name:'cantidad_producto'
    })
    cantidad:number

    @Column({
        type:'datetime',
        name:'fecha_inicio'
    })
    fechaInicio:string

    @Column({
        type:'datetime',
        name:'fecha_fin'
    })
    fechaFin:string


    @OneToMany(
        type => ImagenProductoEntity,
        imagenProducto=>imagenProducto.producto
    )
    imagenes:ImagenProductoEntity[]



    @ManyToOne(
        type => CategoryEntity,
        categoria=> categoria.productos
    )
    categoria:CategoryEntity


    @OneToMany(
        type => DetallePedidoEntity,
        detalle=>detalle.producto
    )
    detallesProducto:DetallePedidoEntity[]


}