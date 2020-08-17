import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioRolEntity} from "../usuario-rol/usuario-rol.entity";

@Entity('usuario')
export class UsuarioEntity{

    @PrimaryGeneratedColumn({
        name:'id_usuario'
    })
    id:number

    @Column({
    name:'nombre_usuario',
    type: 'varchar',
    length:'50',
    nullable:false
    })
    nombre:string


    @Column({
        name:'apellido_usuario',
        type: 'varchar',
        length:'50',
        nullable:false
    })
    apellido:string

    @Column({
        name:'correo_usuario',
        type: 'varchar',
        length:'50',
        nullable:false
    })
    correo:string


    @Column({
        name:'telefono_usuario',
        type: 'varchar',
        length:'50',
        nullable:true
    })
    telefono?:string


    @Column({
        name:'password_usuario',
        type: 'varchar',
        length:'50',
    })
    password:string


    @Column({
        name:'estado_usuario',
        type: 'number',

    })
    estado:number


    @Column({
        name:'fecha_nacimiento_usuario',
        type: 'date',

    })
    fechaNacimiento?:string










}