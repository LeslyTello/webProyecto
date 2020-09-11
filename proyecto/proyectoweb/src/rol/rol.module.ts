import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";
import {RolController} from "./rol.controller";
import {RolService} from "./rol.service";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [RolEntity],
            'default' //nombre de la cadena de conexion
        )],
    providers:[RolService],
    controllers:[RolController]
    }
)
export class RolModule {

}