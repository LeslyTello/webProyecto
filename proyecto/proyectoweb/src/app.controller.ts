import {Body, Controller, Get, InternalServerErrorException, Query, Res, Session} from '@nestjs/common';
import {AppService} from "./app.service";
@Controller()
export class AppController {
    constructor(
        private readonly _appService: AppService
    ) {}

    @Get()
    getHello(): string {
        return this._appService.getHello();
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

    @Get('contactenos')
    contactenos(
        @Res() res,
        @Session() session
    ){
        if(typeof session == undefined){
            res.render('contact');
        } else {
            res.render(
                'contact', {
                    nombre: session.nombre
                }
            );
        }
    }


}
