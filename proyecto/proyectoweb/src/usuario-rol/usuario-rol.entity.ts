import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario_rol')
export class UsuarioRolEntity{

    @PrimaryGeneratedColumn({

        comment:'Identificador rol-usuario',
        name:'id_usuario_rol',
        type:'number'
    } )
    id:number


}