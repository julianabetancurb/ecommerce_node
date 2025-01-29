import { Controller,Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('limit') limit = 1004)
    {
      return `users limit> ${limit}`  
    }
}
