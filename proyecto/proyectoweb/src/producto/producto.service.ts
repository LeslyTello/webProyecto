import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {ProductoEntity} from "./producto.entity";

export class ProductoService{
    constructor( @InjectRepository(ProductoEntity)
                 private repositorioProducto:Repository<ProductoEntity>
    ) {
    }

    crearUnProducto(productoNuevo:ProductoEntity){
        return this.repositorioProducto.save(productoNuevo)
    }

    modificarUnProducto(productoModificado:ProductoEntity){
        return this.repositorioProducto.save(productoModificado)
    }

    eliminarUnProducto(id:number){
        return this.repositorioProducto.delete(id)
    }

    mostrarUnProducto(id:number){
        return this.repositorioProducto.findOne(id)
    }

    buscarTodosProductos(){
        return this.repositorioProducto.find()
    }
}