import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RolEntity} from "./rol.entity";

export class RolService{
    constructor( @InjectRepository(RolEntity)
                 private repositorioRol:Repository<RolEntity>
    ) {
    }
}