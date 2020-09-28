import {InjectRepository} from "@nestjs/typeorm";

import {FindManyOptions, Repository} from "typeorm";
import {ProductoEntity} from "./producto.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

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

    buscarProductosImagen() {
        const consulta = {
            relations: ['imagenes']

        }
        return this.repositorioProducto.find(consulta);
    }

    buscarPorCategoria(nombre:string){
        const consulta = {
            where:{
                categoria:nombre
            }

        }
        return this.repositorioProducto.find(consulta);
    }
}