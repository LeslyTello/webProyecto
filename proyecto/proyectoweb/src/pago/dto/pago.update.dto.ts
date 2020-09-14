import {IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";

export class PagoUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    nombrePago:string
}