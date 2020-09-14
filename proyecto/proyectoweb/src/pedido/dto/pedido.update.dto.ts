import {IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";

export class PedidoUpdateDto {
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsOptional()
    @IsString()
    fechaPedido?: string

    @IsOptional()
    @IsNumber()
    @IsPositive()
    subtotal?:number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    iva?:number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    total?:number

    @IsOptional()
    @IsString()
    estado?:string
}