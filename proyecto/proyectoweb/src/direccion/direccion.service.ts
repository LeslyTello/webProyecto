import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DireccionEntity} from "./direccion.entity";

export class DireccionService{
    constructor(@InjectRepository(DireccionEntity)
                private repositorioDireccion: Repository<DireccionEntity>) {
    }
}