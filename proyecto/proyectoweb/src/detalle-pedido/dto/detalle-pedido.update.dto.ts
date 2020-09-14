import {IsNotEmpty, IsNumber, IsOptional, IsPositive} from "class-validator";

export class DetallePedidoUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    cantidad?:number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    valorUnitario?:number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    valorTotal?:number
}