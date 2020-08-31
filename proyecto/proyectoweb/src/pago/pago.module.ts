import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PagoEntity} from "./pago.entity";
import {PagoController} from "./pago.controller";
import {PagoService} from "./pago.service";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [PagoEntity],
            'default' //nombre de la cadena de conexion
        )],
    providers:[PagoService],
    controllers:[PagoController]
})

export class PagoModule{

}
