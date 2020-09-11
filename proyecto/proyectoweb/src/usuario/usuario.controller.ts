import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    InternalServerErrorException,
    Post,
    Res
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
                usuarioNuevo=parametrosUsuario
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


     @Get('vista/inicio')
    inicio(@Res() res){
         res.render(
             'compartido/pie');
     }
}