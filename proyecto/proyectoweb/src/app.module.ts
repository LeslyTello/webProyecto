import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [ TypeOrmModule.forRoot({
    name:'default',//nombre de conexion
    type: 'mysql',//mysql, postgres, etc
    host: 'localhost', //IP
    port: 3306, //puerto
    username: 'root', //usuario
    password: 'adminWEB98', //password
    database: 'web', //base de datos
    entities: [ //TODAS LAS ENTIDADES
    ],
    synchronize: true,// Actualiza el estado de la base de datos
    dropSchema:false //Eliminar los datos y el esquema de base de datos
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
