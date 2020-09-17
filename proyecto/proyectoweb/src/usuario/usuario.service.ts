import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";


export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
        private repositorioUsuario:Repository<UsuarioEntity>
    ) {
    }

    crearUnUsuario(nuevoUsuario:UsuarioEntity){

        return this.repositorioUsuario.save(nuevoUsuario)
    }

    buscarTodosUsuarios(){
        return this.repositorioUsuario.find()
    }

    buscarUnUsuario(id:number){
        return this.repositorioUsuario.findOne(id)
    }

    editarUnUsuario(usuarioEditado:UsuarioEntity){
        return this.repositorioUsuario.save(usuarioEditado)
    }


    eliminarUnUsuario(id:number){
        return this.repositorioUsuario.delete(id)
    }



}