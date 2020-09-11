import {Body, Controller, Get, Post} from "@nestjs/common";
import {DireccionService} from "./direccion.service";

@Controller('direccion')

export class DireccionController{


    constructor(
        private readonly _direccionService:DireccionService
    ){

    }
    @Post()
    async crearUno(
        @Body() parametros
    ){
      try{
          const respuesta=await this._direccionService.crearUnaDireccion(parametros)
          return respuesta
      }catch (e) {
          console.log(e)
      }
    }

    @Get()
    mostrarTodos(){
       return this._direccionService.mostrarTodosDireccion()
    }
}