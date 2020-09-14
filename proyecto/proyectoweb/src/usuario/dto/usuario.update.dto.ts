import {
    IsAlpha,
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsNumberString,
    IsOptional, IsString,
    MaxLength,
    MinLength
} from "class-validator";


export class UsuarioUpdateDto{

    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsAlpha()
    @IsOptional()
    @MaxLength(50)
    nombre?:string

    @IsAlpha()
    @IsOptional()
    @MaxLength(50)
    apellido?:string

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
    estado?:string

    @IsOptional()
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password?:string

    @IsOptional()
    @IsString()
    fechaNacimiento?:string
}