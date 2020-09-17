import {Controller, Get, Param} from "@nestjs/common";
import {RolService} from "./rol.service";

@Controller('rol')
export class RolController {

    constructor(
        private readonly _rolService:RolService
    ){

    }
    @Get('nombre')
    mostrarNombre(){
        return this._rolService.buscarNombre()
    }

    @Get('nombre/:nombre')
    obtener(
        @Param() parametro
    ){
        return this._rolService.buscarIdPorNombre(parametro.nombre)
    }

}