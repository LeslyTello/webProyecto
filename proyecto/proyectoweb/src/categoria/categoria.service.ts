import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CategoriaEntity} from "./category.entity";


export class CategoriaService{
    constructor(@InjectRepository(CategoriaEntity)
        private repositorioCategoria:Repository<CategoriaEntity>
    ){

    }

    crearUnaCategoria(categoriaNueva:CategoriaEntity){
        return this.repositorioCategoria.save(categoriaNueva)
    }

    modificarUnaCategoria(categoriaModificada:CategoriaEntity){
        return this.repositorioCategoria.save(categoriaModificada)
    }

    eliminarUnaCategoria(id:number){
        return this.repositorioCategoria.delete(id)
    }

    mostrarUnaCategoria(id:number){
        return this.repositorioCategoria.findOne(id)
    }

    buscarTodosCategoria(){
        return this.repositorioCategoria.find()
    }

}