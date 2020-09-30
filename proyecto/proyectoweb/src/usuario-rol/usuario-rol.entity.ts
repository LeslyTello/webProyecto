import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {RolEntity} from "../rol/rol.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('usuario_rol')
export class UsuarioRolEntity{

    @PrimaryGeneratedColumn({
        comment:'Identificador rol-usuario',
        name:'id_usuario_rol',
        type:'int'
    } )
    id?:number

    @ManyToOne(
        type => RolEntity,
        rol=>rol.usuarios
    )
    @JoinColumn({name: 'id_rol'})
    rol: RolEntity

    @ManyToOne(
        type => UsuarioEntity,
        usuario=>usuario.roles
    )
    @JoinColumn({name: 'id_usuario'})
    usuario:UsuarioEntity



}