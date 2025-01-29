import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get('makeup/co')
    getCoMakeup(){
        return 'Bellah beauty, Atenea, Montoc, Girly'
    }
    @Get('clothes/:co')
    getCoClothing(@Param('co') co: string){
        return `clothes from ${co}`
    }



}
