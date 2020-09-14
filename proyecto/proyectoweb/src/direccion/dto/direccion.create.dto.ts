import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";


export class DireccionCreateDto {
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    latitud:string

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    longitud:string


    @IsString()
    @MaxLength(100)
    @IsOptional()
    referencia?:string
}