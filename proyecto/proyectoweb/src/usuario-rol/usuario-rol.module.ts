import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioRolEntity} from "./usuario-rol.entity";
import {UsuarioRolService} from "./usuario-rol.service";
import {UsuarioRolController} from "./usuario-rol.controller";
import {Module} from "@nestjs/common";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [UsuarioRolEntity],
            'default' //nombre de la cadena de conexion
        )],
    providers:[UsuarioRolService],
    controllers:[UsuarioRolController]
})
export class UsuarioRolModule{

}