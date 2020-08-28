import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolEntity} from "./rol/rol.entity";
import {UsuarioRolEntity} from "./usuario-rol/usuario-rol.entity";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {DireccionEntity} from "./direccion/direccion.entity";
import {PedidoEntity} from "./pedido/pedido.entity";
import {DetallePedidoEntity} from "./detalle-pedido/detalle-pedido.entity";
import {PagoEntity} from "./pago/pago.entity";
import {ProductoEntity} from "./producto/producto.entity";
import {ImagenProductoEntity} from "./imagen-producto/imagen-producto.entity";
import {CategoryEntity} from "./categoria/category.entity";
import {UsuarioModule} from "./usuario/usuario.module";

@Module({
  imports: [
      UsuarioModule,
      TypeOrmModule.forRoot({
    name:'default',//nombre de conexion
    type: 'mysql',//mysql, postgres, etc
    host: 'localhost', //IP
    port: 3306, //puerto
    username: 'root', //usuario
    password: 'adminWEB98', //password
    database: 'web', //base de datos
    entities: [ //TODAS LAS ENTIDADES
        UsuarioEntity,
        UsuarioRolEntity,
        RolEntity,
        DireccionEntity,
        PedidoEntity,
        DetallePedidoEntity,
        PagoEntity,
        ProductoEntity,
        ImagenProductoEntity,
        CategoryEntity

    ],
    synchronize: true,// Actualiza el estado de la base de datos
    dropSchema:false //Eliminar los datos y el esquema de base de datos
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
