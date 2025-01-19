import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hola mundo';
  }
  
  @Get('nuevo')
  newEndponint(){
    return 'soy un endpiny'
  }
  @Get('/ruta/')
  hello(){
    return 'con /sas/'
  }
   
}
