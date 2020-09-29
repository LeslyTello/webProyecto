import {
    BadRequestException,
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Param,
    Post,
    Res
} from "@nestjs/common";
import {PedidoService} from "./pedido.service";
import {PedidoCreateDto} from "./dto/pedido.create.dto";
import {validate} from "class-validator";
import {PedidoUpdateDto} from "./dto/pedido.update.dto";

@Controller('pedido')
export class PedidoController{


    constructor(
        private readonly _pedidoService:PedidoService
    ) {
    }
    @Post()
    async crear(
        @Body() parametros
    ){
        let pedido

        try{

            const pedidoNuevoDto= new PedidoCreateDto()
            pedidoNuevoDto.estado=parametros.estado
            pedidoNuevoDto.fechaPedido=parametros.fechaPedido
            pedidoNuevoDto.iva=parametros.iva
            pedidoNuevoDto.subtotal=parametros.subtotal
            pedidoNuevoDto.total=parametros.total
            const errores= await validate(pedidoNuevoDto)
            if(errores.length>0){
                console.log(errores)
                throw new BadRequestException('Error en los datos ')
            }else{
              pedido=pedidoNuevoDto
            }

        }catch (e) {
            console.log(e)
            throw new BadRequestException('Error en los datos ')
        }

        if(pedido){
            try{
                const res=await this._pedidoService.crearUnPedido(pedido)
                return res
            }catch (e) {
                throw new InternalServerErrorException('Error en el servidor')
            }
        }
    }


    @Post('/:id')
    async modificarPedido(
        @Body() parametros,
        @Param() parametroRuta
    ){
        let pedido

        try{

            const pedidoNuevoDto= new PedidoUpdateDto()
            pedidoNuevoDto.estado=parametros.estado
            pedidoNuevoDto.fechaPedido=parametros.fechaPedido
            pedidoNuevoDto.iva=parametros.iva
            pedidoNuevoDto.subtotal=parametros.subtotal
            pedidoNuevoDto.total=parametros.total
            pedidoNuevoDto.id=Number(parametroRuta.id)
            const errores= await validate(pedidoNuevoDto)
            if(errores.length>0){
                console.log(errores)
                throw new BadRequestException('Error en los datos ')
            }else{
                pedido=pedidoNuevoDto
            }

        }catch (e) {
            console.log(e)
            throw new BadRequestException('Error en los datos ')
        }

        if(pedido){
            try{
                const res=await this._pedidoService.modificarPedido(pedido)
                return res
            }catch (e) {
                throw new InternalServerErrorException('Error en el servidor')
            }
        }
    }



    @Get(


    )
    async mostrar(
        @Res() res
    ){
        const pedidos= await this._pedidoService.mostrarTodosPedido()
        console.log(pedidos)
        res.render('admin/dashboard',{
                pedidos:pedidos,
                page:'pedido'
            }
            )

    }

    @Get('relacion')
    async mostrarRelacion(){
        return this._pedidoService.buscarTodaRelacion()
    }



}