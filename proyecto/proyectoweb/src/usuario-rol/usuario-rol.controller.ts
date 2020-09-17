import {BadRequestException, Body, Controller, Get, InternalServerErrorException, Param, Post} from "@nestjs/common";
import {UsuarioRolService} from "./usuario-rol.service";
import {UsuarioRolCreateDto} from "./dto/usuario-rol.create.dto";
import {validate} from "class-validator";

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
        let usuarioRol

       try{
            const usuarioRolDto=new UsuarioRolCreateDto()
           usuarioRolDto.rol=parametros.idRol
           usuarioRolDto.usuario=parametros.idUsuario
           const errores=await validate(usuarioRolDto)
           if(errores.length>0){
               throw new BadRequestException('Error en validacion')
           }else{
               usuarioRol=usuarioRolDto
           }

       } catch (e) {
           console.log(e)
           throw new BadRequestException('Error en validacion')
       }

       if(usuarioRol){
           const respuesta=await this._usuarioRolService.crearUnUsuarioRol(usuarioRol)
           return respuesta
       }else{
           throw new InternalServerErrorException('Error en el servidor')
       }




    }

    @Get('verificar/:id')
    async verificarUsuarioCliente(
        @Param() pametroRuta
    ){
        const id=Number(pametroRuta.id)
        try{
            console.log(pametroRuta,id)
           // const respuesta=this._usuarioRolService.verificarUsuarioCliente(id)
          //  return respuesta

        }catch (e) {
            console.log('Errores',e)
            throw new BadRequestException('Error en la peticion')
        }
    }

}