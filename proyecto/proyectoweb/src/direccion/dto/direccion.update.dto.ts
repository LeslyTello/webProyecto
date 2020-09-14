import {IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
import {Column} from "typeorm";

export class DireccionUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsString()
    @MaxLength(100)
    @IsOptional()
    latitud?:string

    @IsString()
    @MaxLength(100)
    @IsOptional()
    longitud?:string


    @IsString()
    @MaxLength(100)
    @IsOptional()
    referencia?:string
}