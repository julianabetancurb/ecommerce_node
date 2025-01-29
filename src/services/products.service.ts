import { Injectable } from '@nestjs/common';
import {Product} from './../entities/product.entity'

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
        return this.products.find((item) => item.id === id);
    }
    create(payload:any){
        this.counterId = this.counterId + 1;
    const newProduct = {
        id: this.counterId, ...payload
    };
    this.products.push(newProduct);
    return newProduct
    }
   
    update(id: number, payload: any) {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex === -1) {
            return { error: 'Producto no encontrado' };
        }
        
        this.products[productIndex] = { 
            ...this.products[productIndex], 
            ...payload 
        };
    
        return this.products[productIndex];
    }
    
    
      
    
}
