import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {Repository} from "typeorm";
import {UsuarioRolEntity} from "./usuario-rol.entity";

export class UsuarioRolService{
    constructor(
        @InjectRepository(UsuarioRolEntity)
        private repositorioUsuarioRol:Repository<UsuarioRolEntity>
    ) {
    }
}