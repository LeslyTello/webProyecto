import {IsNotEmpty, IsString, MaxLength} from "class-validator";


export class PagoCreateDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    nombrePago:string
}