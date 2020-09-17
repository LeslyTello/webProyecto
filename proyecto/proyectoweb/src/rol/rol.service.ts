import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RolEntity} from "./rol.entity";

export class RolService{
    constructor( @InjectRepository(RolEntity)
                 private repositorioRol:Repository<RolEntity>
    ) {
    }

    buscarTodos(){
        return this.repositorioRol.find()
    }

    buscarNombre(){
        let peticion
        peticion={
            select:["nombre"]
        }
        return this.repositorioRol.find(peticion)
    }

    buscarIdPorNombre(nombre:string){
        let peticion
        peticion={
            where:{
                nombre:nombre
            },
            select:["id"]

        }
        return this.repositorioRol.find(peticion)
    }
}