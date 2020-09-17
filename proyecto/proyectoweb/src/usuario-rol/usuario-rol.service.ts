import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UsuarioRolEntity} from "./usuario-rol.entity";

export class UsuarioRolService{
    constructor(
        @InjectRepository(UsuarioRolEntity)
        private repositorioUsuarioRol:Repository<UsuarioRolEntity>
    ) {
    }

    crearUnUsuarioRol(usuarioRol:UsuarioRolEntity){
        return this.repositorioUsuarioRol.save(usuarioRol)

    }
    mostrarTodos(){
        return this.repositorioUsuarioRol.find()
    }


}