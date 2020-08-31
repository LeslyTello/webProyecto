import {IsNotEmpty, MaxLength} from "class-validator";

export class CategoriaCreateDto{
    @IsNotEmpty()
    @MaxLength(100)
    nombre:string

}