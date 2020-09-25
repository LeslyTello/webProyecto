import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express'), session = require('express-session'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    FileStore = require('session-file-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as any;

  app.set('view engine','ejs')

    app.use(
        session({
            name: 'server-session-id',
            secret: 'No sera de tomar un traguito',
            resave: true,
            saveUninitialized: true,
            cookie: {secure: false},
            store: new FileStore(),
        }),
    );

  app.use(express.static('publico'))
  await app.listen(3000);


}
bootstrap();
