import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    InternalServerErrorException,
    Post, Query, Req,
    Res, Session
} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario.create.dto";
import {validate} from "class-validator";
import {UsuarioUpdateDto} from "./dto/usuario.update.dto";

@Controller('usuario')
export class UsuarioController{

    constructor(
        private readonly _usuarioService:UsuarioService
    ) {
    }

    @Get()
    async mostrarUsuarios(
        @Res() res,
        @Query() parametrosBusqueda,
        @Session() session
    ){
        return res.render(
            'usuarioAcount/usuario',
            {
                nombre: session.nombre,
                apellido: session.apellido,
                correo: session.correo,
                telefono: session.telefono,
                estado: session.estado,
                fechaNacimiento: session.fechaNacimiento,
                roles: session.roles,
                direcciones: session.direcciones,
                pedidos: session.pedidos,
                page: parametrosBusqueda.page,
                mensaje: parametrosBusqueda.mensaje,
            }
        )
     }


    @Post('crear')
    async crearUsuario(
        @Body() parametrosUsuario,
        @Res() res
    ){
        // Crea a un nuevo usuario por defecto el estado es 1.
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._usuarioService.buscarEmail(parametrosUsuario.email);
            let usuarioNuevo
            if(resultadoEncontrado==''){
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
            }
            if(usuarioNuevo){
                try{
                    this._usuarioService.crearUnUsuario(usuarioNuevo)
                    return res.redirect('../inicio')
                }catch (e) {
                    throw new BadRequestException('Error en el servidor')
                }
            }else{
                throw new BadRequestException('Error en los datos ingresados ')
            }
        } catch (error) {
            throw new InternalServerErrorException('Error encontrando usuarios')
        }
    }

    @Post('editar')
    async editarUsuario(
        @Body() parametrosUsuario,
        @Res() res,
        @Session() session
    ){
        console.log(parametrosUsuario)
        let usuarioEditado
        try{
            const usuarioDto= new UsuarioUpdateDto()
            usuarioDto.id= session.idUsuario
            usuarioDto.nombre=parametrosUsuario.nombre
            usuarioDto.apellido=parametrosUsuario.apellido
            usuarioDto.correo=session.correo
            usuarioDto.telefono=parametrosUsuario.telefono
            usuarioDto.estado=(parametrosUsuario.estado==='2') ? ('2') : ('1')
            usuarioDto.fechaNacimiento=parametrosUsuario.birth

            const errores= await validate(usuarioDto)
            if(errores.length>0){
                console.error('Errores', errores)
                throw new BadRequestException('Errores encontrados')
            }else{
                usuarioEditado=usuarioDto
            }

        }catch (e) {
            throw new BadRequestException('Error con la validacion')
        }
        if(usuarioEditado){
            try{
                this._usuarioService.editarUnUsuario(usuarioEditado)
                session.idUsuario = usuarioEditado.id
                session.nombre = usuarioEditado.nombre
                session.apellido = usuarioEditado.apellido
                session.correo = usuarioEditado.correo
                session.telefono = usuarioEditado.telefono
                session.estado = usuarioEditado.estado
                session.fechaNacimiento = usuarioEditado.fechaNacimiento
                return res.redirect('../usuario?mensaje=Datos editados.')
            }catch (e) {
                throw new BadRequestException('Error en el servidor')
            }
        }else{
            throw new BadRequestException('Error en los datos ingresados ')
        }
    }
    @Post('cambio-pass')
    async editarPassword(
        @Body() parametrosUsuario,
        @Res() res,
        @Session() session
    ) {
        if (parametrosUsuario.inputPassword === parametrosUsuario.inputPassword2) {
            let usuarioEditado
            try {
                const usuarioDto = new UsuarioUpdateDto()
                usuarioDto.id = session.idUsuario
                usuarioDto.correo = session.correo
                usuarioDto.password = parametrosUsuario.inputPassword

                const errores = await validate(usuarioDto)
                if (errores.length > 0) {
                    console.error('Errores', errores)
                    return res.redirect('../usuario?page=pass&mensaje=Contraseñas incorrectas')
                } else {
                    usuarioEditado = usuarioDto
                }

            } catch (e) {
                throw new BadRequestException('Error con la validacion')
            }
            if (usuarioEditado) {
                try {
                    this._usuarioService.editarUnUsuario(usuarioEditado)
                    return res.redirect('../usuario?page=pass&mensaje=Contraseña actualizada')
                } catch (e) {
                    throw new BadRequestException('Error en el servidor')
                }
            } else {
                throw new BadRequestException('Error en los datos ingresados ')
            }
        } else  {
            return res.redirect('../usuario?page=pass&mensaje=Las contraseñas no coinciden')
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
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException('Error encontrando usuario')
        }
        // validamos datos
        if(resultadoEncontrado){

            try {
                const user = parametrosConsulta.email;
                const password = parametrosConsulta.pass;
                if (user == resultadoEncontrado[0].correo && password == resultadoEncontrado[0].password) {
                    console.log('Ingreso exitoso ' + resultadoEncontrado[0].nombre)
                    session.idUsuario = resultadoEncontrado[0].id
                    session.nombre = resultadoEncontrado[0].nombre
                    session.apellido = resultadoEncontrado[0].apellido
                    session.correo = resultadoEncontrado[0].correo
                    session.telefono = resultadoEncontrado[0].telefono
                    session.estado = resultadoEncontrado[0].estado
                    session.fechaNacimiento = resultadoEncontrado[0].fechaNacimiento
                    session.roles = resultadoEncontrado[0].roles
                    session.direcciones = resultadoEncontrado[0].direcciones
                    session.pedidos = resultadoEncontrado[0].pedidos
                    return response.redirect('../inicio');
                }
            }catch (e) {
                return response.redirect('../inicio?mensaje=error');
            }

        } else {
            return response.redirect('../inicio?mensaje=error');
        }
    }

    @Get('logout')
    logout(
        @Session() session,
        @Res() response,
        @Req() request
    ){
        session.idUsuario = undefined
        session.nombre = undefined
        session.apellido = undefined
        session.correo = undefined
        session.telefono = undefined
        session.estado = undefined
        session.fechaNacimiento = undefined
        session.roles = undefined
        session.direcciones = undefined
        session.pedidos = undefined
        request.session.destroy();
        return response.redirect('../inicio')
    }



}