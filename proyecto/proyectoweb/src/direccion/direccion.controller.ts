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
import {DireccionService} from "./direccion.service";
import {DireccionCreateDto} from "./dto/direccion.create.dto";
import {validate} from "class-validator";

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
        let nuevaDireccion
      try{
            const direccion=new DireccionCreateDto()
          direccion.latitud=parametros.latitud
          direccion.longitud=parametros.longitud
          direccion.referencia=parametros.referencia
          const errores= await validate(direccion)
          if(errores.length>0){
              console.log(errores)
              throw new BadRequestException('Error en los datos')
          }else{
              nuevaDireccion=direccion
          }

      }catch (e) {
          console.log(e)
          throw new BadRequestException('Error en los datos')
      }
      if(nuevaDireccion){
          try{
              const respuesta=await this._direccionService.crearUnaDireccion(nuevaDireccion)
              return respuesta
          }catch (e) {
              console.log(e)
              throw new InternalServerErrorException('Error en el servidor')
          }
      }

    }

    @Get()
    mostrarTodos(){
       return this._direccionService.mostrarTodosDireccion()
    }

    @Post('eliminar/:id')
    async eliminarDesdeVista(
        @Param() parametrosRuta,
        @Res() res
    ) {
        try {
            const id = Number(parametrosRuta.id);
            await this._direccionService.eliminarUnaDireccion(id)
            return res.redirect('/usuario?page=addres')
        } catch (error) {
            console.log(error);
            return res.redirect('/usuario?page=addres')
        }

    }
}