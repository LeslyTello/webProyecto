import {Body, Controller, Get, Post} from "@nestjs/common";
import {UsuarioRolService} from "./usuario-rol.service";

@Controller('usuarioRol')
export class UsuarioRolController{


    constructor(
        private readonly _usuarioRolService:UsuarioRolService
    ){

    }
    @Get()
    mostrarTodos(){
        return this._usuarioRolService.mostrarTodos()
    }

    @Post()
   async  crearUno(
       @Body() parametros
    ){
       try{
           const respuesta=await this._usuarioRolService.crearUnUsuarioRol(parametros)
           return respuesta
       } catch (e) {
           console.log(e)
       }
    }
}