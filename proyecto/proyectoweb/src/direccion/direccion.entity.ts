import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('direccion')
export class DireccionEntity {


    @PrimaryGeneratedColumn({

        comment:'Identificador de direccion cliente',
        name:'id_direccion',
        type:"int"
    }

    )
    id:number

    @Column({
            name:'latitud',
            type:'varchar',
            length:'100'
        }

    )
    latitud:string

    @Column({
        name:'longitud',
        type:'varchar',
        length:'100'
        }

    )
    longitud:string


    @Column({
        name:'referencia',
        type:'varchar',
        length:'100'
        
        }

    )
    referencia:string

    @ManyToOne(
        type=> UsuarioEntity,
        usuario=> usuario.direcciones
    )
    usuario:UsuarioEntity

}