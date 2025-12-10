import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/gaurd/role.guard';
import { Roles } from 'src/auth/gaurd/roles.decorator';
import { CreateOrderDto } from './dto/create-order.dto';

@UseGuards(AuthGuard)
@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService){}

    @Roles('WAITER')
    @UseGuards(RoleGuard)
    @Post('/create')
    async create(@Body() orderData: CreateOrderDto){

        await this.orderService.createOrder(orderData);
        return{
            "message":"Order Created"
        }

    }

}
