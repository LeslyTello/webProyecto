import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PagoEntity} from "./pago.entity";

export class PagoService{
    constructor(@InjectRepository(PagoEntity)
    private repositorioPago: Repository<PagoEntity>) {
    }


    crearPago(pagoNuevo:PagoEntity){
        return this.repositorioPago.save(pagoNuevo)
    }

    modificarPago(pagoModificado:PagoEntity){
        return this.repositorioPago.save(pagoModificado)
    }

    mostrarTodosPago(){
        return this.repositorioPago.find()
    }


}