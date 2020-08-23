import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {RolEntity} from "../rol/rol.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('usuario_rol')
export class UsuarioRolEntity{

    @PrimaryGeneratedColumn({

        comment:'Identificador rol-usuario',
        name:'id_usuario_rol',
        type:'int'
    } )
    id:number

    /*@ManyToOne(
        type => RolEntity,
        rol=>rol.idRol
    )
    usuarios:UsuarioRolEntity[]

    @ManyToOne(
        type => UsuarioEntity,
        usuario=>usuario.idUsuario
    )
    roles:UsuarioRolEntity[]*/
}