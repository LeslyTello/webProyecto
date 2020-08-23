import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioRolEntity} from "../usuario-rol/usuario-rol.entity";

@Entity('rol')
export class RolEntity {


    @PrimaryGeneratedColumn({

    comment:'Identificador del rol',
    name:'id_rol'}

    )
    id:number

    @Column({
        name:'nombre_rol'
        }

    )
    nombre:string

   /* @OneToMany(type => UsuarioRolEntity,
        usuarioRol=>usuarioRol.usuarios)

    idRol:RolEntity*/



}