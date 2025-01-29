import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import {ProductsService} from './services/products.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, CustomersController, BrandsController, UsersController, OrdersController],
  providers: [AppService, ProductsService ],
})
export class AppModule {}
