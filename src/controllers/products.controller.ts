import { Controller, Get, Param, Query, Post, Body,
     Put, Delete, HttpStatus, HttpCode, Res } from '@nestjs/common';

import {ProductsService } from './../services/products.service'
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get()
    getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0,
        @Query('brand') brand: string) {
        return this.productsService.findAll()

    }
    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct( @Param('productId') productId: string) {
        return this.productsService.findOne(+productId)
    }
    @Get('filter')
    getProductFilter(){
        return{message:`yo soy un filter`} ;
    }
    @Post()
    create(@Body()payload: any){
        return this.productsService.create(payload)
    }
    //aqui tenia un error, que el id se estaba leyendo como un str por el Param, me
    //aseguro que se convierta en int para que se lea y se actualice correctamente
    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.productsService.update(Number(id), payload);
}

}
