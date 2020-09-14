import {IsNotEmpty, IsNumber, IsPositive, IsString} from "class-validator";

export class PedidoCreateDto {
    @IsNotEmpty()
    @IsString()
    fechaPedido: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    subtotal:number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    iva:number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    total:number

    @IsNotEmpty()
    @IsString()
    estado:string
}