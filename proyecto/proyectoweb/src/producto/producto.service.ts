import {InjectRepository} from "@nestjs/typeorm";

import {FindManyOptions, Like, Repository} from "typeorm";
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

    buscarTodosProductos(textoDeConsulta?:String){
        if (textoDeConsulta !== undefined) {
            const consulta: FindManyOptions<ProductoEntity> = {
                relations:['imagenes'],
                where: [
                    {
                        nombre: Like(`%${textoDeConsulta}%`)
                    },
                    {
                        descripcion: Like(`%${textoDeConsulta}%`)
                    }
                ]
            }
            return this.repositorioProducto.find(consulta);
        } else{
            return this.repositorioProducto.find({relations:['imagenes']});
        }
    }
}