import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {ProductoEntity} from "./producto.entity";
import {ProductoController} from "./producto.controller";
import {ProductoService} from "./producto.service";


@Module({
    imports:[
        TypeOrmModule.forFeature(
            [ProductoEntity],
            'default' //nombre de la cadena de conexion
        )],
    providers:[ProductoService],
    controllers:[ProductoController]
})
export class ProductoModule{

}