import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('direccion')
export class DireccionEntity {


    @PrimaryGeneratedColumn({

        comment:'Identificador de direccion cliente',
        name:'id_direccion'}

    )
    id:number

    @Column({
            name:'latitud'
        }

    )
    latitud:string

    @Column({
            name:'longitud'
        }

    )
    longitud:string


    @Column({
            name:'referencia',
        
        }

    )
    referencia:string
}