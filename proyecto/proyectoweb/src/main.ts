import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const express=require('express');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  await app.listen(3000);
  app.use(express.static('publico'))
}
bootstrap();
