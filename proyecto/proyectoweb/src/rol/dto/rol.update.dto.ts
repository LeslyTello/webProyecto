import {IsAlpha, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength} from "class-validator";

export class RolUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsAlpha()
    @IsOptional()
    @MaxLength(50)
    nombre?:string
}