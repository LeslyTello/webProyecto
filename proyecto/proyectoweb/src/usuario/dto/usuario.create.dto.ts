import {IsAlpha, IsEmail, IsInt, IsNotEmpty, IsNumberString, IsOptional, MaxLength, MinLength} from "class-validator";

export class UsuarioCreateDto{
    @IsAlpha()
    @IsNotEmpty()
    @MaxLength(50)
    nombre:string



    @IsAlpha()
    @IsNotEmpty()
    @MaxLength(50)
    apellido:string



    @IsEmail()
    @IsNotEmpty()
    @MaxLength(50)
    correo:string


    @IsNumberString()
    @IsOptional()
    @MaxLength(50)
    telefono?:string



    @IsInt()
    @IsNotEmpty()
    estado:string


    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    password:string



    @IsOptional()
    fechaNacimiento?:string
}