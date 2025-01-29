import { Controller,Get, Param } from '@nestjs/common';

@Controller('order')
export class OrdersController {
    @Get(':order')
    getOrder(@Param('order') order : string)
    {
        return `order number ${order}` ;
    }
}
