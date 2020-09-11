import {InjectRepository} from "@nestjs/typeorm";
import {DireccionEntity} from "../direccion/direccion.entity";
import {Repository} from "typeorm";
import {ImagenProductoEntity} from "./imagen-producto.entity";


export class ImagenProductoService{
    constructor(@InjectRepository(ImagenProductoEntity)
                private repositorioImagenProducto: Repository<ImagenProductoEntity>) {
    }
}