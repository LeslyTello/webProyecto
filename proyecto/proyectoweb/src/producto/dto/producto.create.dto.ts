import {IsAlpha, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";

export class ProductoCreateDto{

    @MaxLength(20)
   codigo?:string


    @MaxLength(50)
    @IsNotEmpty()
    nombre:string


    @MaxLength(100)
    @IsOptional()
    descripcion?:string


    @IsNumber()
    @IsNotEmpty()
    precio:number

    @IsInt()
    cantidad?:number

    @IsString()
    @IsOptional()
    fechaInicio?:string


    @IsString()
    @IsOptional()
    fechaFin?:string




}