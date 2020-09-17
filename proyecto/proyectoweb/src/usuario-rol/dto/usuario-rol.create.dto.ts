import {IsInt, IsNotEmpty} from "class-validator";

export class UsuarioRolCreateDto{

    @IsNotEmpty()
    @IsInt()
    usuario:number
    @IsNotEmpty()
    @IsInt()
    rol:number

}