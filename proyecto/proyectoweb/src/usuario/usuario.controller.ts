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


     @Post()
    async crearUsuario(@Body() parametrosUsuario){

        //Crea a un nuevo usuario por defecto el estado es 1.
        let usuarioNuevo
        try{
            const usuarioDto= new UsuarioCreateDto()
            usuarioDto.nombre=parametrosUsuario.nombre
            usuarioDto.apellido=parametrosUsuario.apellido
            usuarioDto.correo=parametrosUsuario.correo
            usuarioDto.telefono=parametrosUsuario.telefono
            usuarioDto.password=parametrosUsuario.password
            usuarioDto.estado=parametrosUsuario.estado
            usuarioDto.fechaNacimiento=parametrosUsuario.fechaNacimiento

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

        if(usuarioNuevo){
            try{
                return this._usuarioService.crearUnUsuario(usuarioNuevo)
            }catch (e) {
                throw new BadRequestException('Error en el servidor')
            }
        }else{
            throw new BadRequestException('Error en los datos ingresados ')
        }
     }

    @Post('login')
    loginPost(
        @Body() parametrosConsulta,
        @Res() response,
        @Session() session
    ) {
        // validamos datos
        const usuario = parametrosConsulta.usuario;
        const password = parametrosConsulta.password;
        if (usuario == 'esteban' && password == '1234') {
            session.usuario = usuario
            session.roles = ['Administrador']
            return response.redirect('protegido');
        } else {
            if (usuario == 'nicolas' && password == '4321') {
                session.usuario = usuario
                session.roles = ['Supervisor']
                return response.redirect('protegido');
            } else {
                return response.redirect('/login')
            }
        }
    }

}