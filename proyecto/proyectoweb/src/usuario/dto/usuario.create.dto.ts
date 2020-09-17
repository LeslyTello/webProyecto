import {
    IsAlpha,
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    IsString,
    MaxLength,
    MinLength
} from "class-validator";

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

    @IsNumberString()
    @IsOptional()
    estado:string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password:string

    @IsOptional()
    @IsString()
    fechaNacimiento?:string
}