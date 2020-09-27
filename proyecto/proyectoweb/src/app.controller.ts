import {Controller, Get, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('inicio')
  inicio(
      @Res() res,
      @Session() session
  ){
    if(typeof session == undefined){
      res.render('index');
    } else {
      res.render(
          'index', {
            nombre: session.nombre
          }
      );
    }
  }
}
