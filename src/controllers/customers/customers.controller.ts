import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get(':customer')
    getCustomer(@Param('customer') customer: string ){
        return `customer named ${customer}`
    }
}
