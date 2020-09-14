import {IsNotEmpty, IsNumber, IsPositive} from "class-validator";

export class DetallePedidoCreateDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    cantidad:number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    valorUnitario:number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    valorTotal:number
}