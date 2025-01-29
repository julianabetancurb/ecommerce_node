import { Injectable, NotFoundException } from '@nestjs/common';
import {Product} from './../entities/product.entity'
import{CreateProductDto, UpdateProductDto} from './../dtos/products.dtos'
@Injectable()
export class ProductsService {
    private counterId =1;
    private products: Product[] = [{
        id: 1,
        name: 'product 1',
        description: 'hola',
        price: 1000,
        stock:10,
        image: '',
    }];
    findAll(){
        return this.products;
    }
    findOne(id: number){
        const product = this.products.find((item) => item.id === id);
        if (!product){
            throw new NotFoundException(`product ${id} not found`);
        }
        return product;
    }   
    create(payload:CreateProductDto){
        console.log(payload);
        this.counterId = this.counterId + 1;
        const newProduct = {
        id: this.counterId, ...payload
    }; 
    this.products.push(newProduct);
    return newProduct
    }
   
    update(id: number, payload: UpdateProductDto) {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex === -1) {
            throw new NotFoundException(`product ${id} not found`);
        }
        
        this.products[productIndex] = { 
            ...this.products[productIndex], 
            ...payload 
        };
    
        return this.products[productIndex];
    }
    del(id:number){
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex === -1) {
            throw new NotFoundException(`product ${id} not found`);

        }
        this.products.splice(productIndex, 1);
        return true;

    }
    
}
