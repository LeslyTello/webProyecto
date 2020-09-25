import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    InternalServerErrorException,
    Post,
    Res, Session
} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario.create.dto";
import {validate} from "class-validator";
import {Console} from "inspector";

@Controller('usuario')
export class UsuarioController{

    constructor(
        private readonly _usuarioService:UsuarioService
    ) {
    }

    @Get()
    @HttpCode(200)
    async mostrarUsuarios(){
        try{
            return await this._usuarioService.buscarTodosUsuarios()

        }catch (e) {
            throw new InternalServerErrorException({
                mensaje:'Error en servidor'
            })
        }
     }


     @Post('crear')
    async crearUsuario(
        @Body() parametrosUsuario,
        @Res() res
     ){
         //Crea a un nuevo usuario por defecto el estado es 1.

         /*let resultadoEncontrado
         try {
             resultadoEncontrado = await this._usuarioService.buscarEmail(parametrosUsuario.email);
         } catch (error) {
             throw new InternalServerErrorException('Error encontrando usuarios')
         }*/
         let usuarioNuevo
         //if(!resultadoEncontrado){
             try{
                 const usuarioDto= new UsuarioCreateDto()
                 usuarioDto.nombre=parametrosUsuario.name
                 usuarioDto.apellido=parametrosUsuario.lastname
                 usuarioDto.correo=parametrosUsuario.email
                 usuarioDto.telefono=parametrosUsuario.telephone
                 usuarioDto.password=(parametrosUsuario.pass===parametrosUsuario.re_pass) ? (parametrosUsuario.pass):("")
                 usuarioDto.estado=(parametrosUsuario.estado==='2') ? ('2') : ('1')
                 usuarioDto.fechaNacimiento=parametrosUsuario.birth

                 const errores= await validate(usuarioDto)
                 if(errores.length>0){
                     console.error('Errores', errores)
                     throw new BadRequestException('Errores encontrados')
                 }else{
                     usuarioNuevo=usuarioDto
                 }

             }catch (e) {
                 throw new BadRequestException('Error con la validacion')
             }

         //}
        if(usuarioNuevo){
            try{
                this._usuarioService.crearUnUsuario(usuarioNuevo)
                return res.redirect('/inicio')
            }catch (e) {
                throw new BadRequestException('Error en el servidor')
            }
        }else{
            throw new BadRequestException('Error en los datos ingresados ')
        }
     }

    @Post('login')
    async loginPost(
        @Body() parametrosConsulta,
        @Res() response,
        @Session() session
    ) {
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._usuarioService.buscarEmail(parametrosConsulta.email);
            // validamos datos
            if(resultadoEncontrado){
                const user = parametrosConsulta.email;
                const password = parametrosConsulta.pass;
                if (user == resultadoEncontrado.correo_usuario && password == resultadoEncontrado.password_usuario) {
                    console.log('Ingreso exitoso')
                    session.usuario = user
                    session.roles = ['Supervisor']
                }
            }
            return response.redirect('../inicio');
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException('Error encontrando usuario')
        }
    }

}