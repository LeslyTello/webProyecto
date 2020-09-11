import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DireccionEntity} from "./direccion.entity";
import {DireccionController} from "./direccion.controller";
import {DireccionService} from "./direccion.service";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [DireccionEntity],
            'default' //nombre de la cadena de conexion
        )],
    providers:[DireccionService],
    controllers:[DireccionController]
})
export class DireccionModule{

}