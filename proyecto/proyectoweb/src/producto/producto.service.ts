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
        console.log(id)
        const consulta: FindManyOptions<ProductoEntity> = {
            relations: ['imagenes', 'categoria'],
            where:[{
                id: Like(`%${id}%`)
            }]
        }
        return this.repositorioProducto.find(consulta);
    }

    buscarTodosProductos(textoDeConsulta?:String){
        if (textoDeConsulta !== undefined) {
            const consulta: FindManyOptions<ProductoEntity> = {
                relations:['imagenes', 'categoria'],
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

    buscarProductosImagen() {
        const consulta = {
            relations: ['imagenes']

        }
        return this.repositorioProducto.find(consulta);
    }

    buscarPorCategoria(nombre:number){
        const consulta = {
            relations: ['imagenes'],
            where:{
                categoria:nombre,
            }

        }
        console.log(consulta)
        return this.repositorioProducto.find(consulta);

    }


    bucarPorNombre(nombre:string){
        const consulta = {

            where:{
                nombre:Like`%$nombre%`,

            }

        }
        console.log(consulta)
        return this.repositorioProducto.find(consulta);
    }
}