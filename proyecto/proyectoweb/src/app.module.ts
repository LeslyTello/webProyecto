import { Module } from '@nestjs/common';
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
import {UsuarioModule} from "./usuario/usuario.module";
import {CategoriaModule} from "./categoria/categoria.module";
import {CategoriaEntity} from "./categoria/category.entity";
import {ProductoModule} from "./producto/producto.module";
import {PagoModule} from "./pago/pago.module";
import {ImagenProductoModule} from "./imagen-producto/imagen-producto.module";
import {DireccionModule} from "./direccion/direccion.module";
import {RolModule} from "./rol/rol.module";
import {UsuarioRolModule} from "./usuario-rol/usuario-rol.module";
import {PedidoModule} from "./pedido/pedido.module";
import {DetallePedidoModule} from "./detalle-pedido/detalle-pedido.module";
import {AppController} from "./app.controller";

//Contrase;a Lesly> adminWEB98
@Module({
  imports: [
      UsuarioModule,
      CategoriaModule,
      ImagenProductoModule,
      ProductoModule,
      DireccionModule,
      RolModule,
      UsuarioRolModule,
      PedidoModule,
      DetallePedidoModule,
      PagoModule,
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
        CategoriaEntity

    ],
    synchronize: true,// Actualiza el estado de la base de datos
    dropSchema:false //Eliminar los datos y el esquema de base de datos
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
