import { Controller, Get, Param, Query, Post, Body,
     Put, Delete, HttpStatus, HttpCode, Res, ParseIntPipe} from '@nestjs/common';
import {ProductsService } from './../services/products.service'
import{CreateProductDto, UpdateProductDto} from './../dtos/products.dtos'



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
    getProduct( @Param('productId', ParseIntPipe) productId: number) {
        return this.productsService.findOne(productId)
    }
    @Get('filter')
    getProductFilter(){
        return{message:`yo soy un filter`} ;
    }
    @Post()
    create(@Body()payload: CreateProductDto){
        return this.productsService.create(payload)
    }


    //aqui tenia un error, que el id se estaba leyendo como un str por el Param, me
    //aseguro que se convierta en int para que se lea y se actualice correctamente

    //se soluciono con el uso de Pipes
    @Put(':id')
    update(@Param('id',  ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
        return this.productsService.update(id, payload);
    }
    @Delete(':id')
    remove(@Param('id',  ParseIntPipe) id: number){
        return this.productsService.del(id);

    }


}
