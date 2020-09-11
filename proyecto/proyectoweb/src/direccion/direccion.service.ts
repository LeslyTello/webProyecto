import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DireccionEntity} from "./direccion.entity";

export class DireccionService{
    constructor(@InjectRepository(DireccionEntity)
                private repositorioDireccion: Repository<DireccionEntity>) {
    }

    crearUnaDireccion(direccion:DireccionEntity){
        return this.repositorioDireccion.save(direccion)
    }

    mostrarTodosDireccion(){
        return this.repositorioDireccion.find()
    }

    mostrarUnaDireccion(id:number){
        return this.repositorioDireccion.findOne(id)
    }

    eliminarUnaDireccion(id:number){
        return this.repositorioDireccion.delete(id)
    }
}