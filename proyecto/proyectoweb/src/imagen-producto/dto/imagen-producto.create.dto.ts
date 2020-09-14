import {IsNotEmpty, IsString, MaxLength} from "class-validator";


export class ImagenProductoCreateDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    url:string
}