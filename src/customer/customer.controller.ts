import { Controller, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Get, Post, Body, Patch } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CustomerService } from './customer.service';
import { RoleGuard } from 'src/auth/gaurd/role.guard';
import { Roles } from 'src/auth/gaurd/roles.decorator';
import { CustomerDTO } from './dto/customer.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('customer')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

@Get('/')
findAll()
{
    return this.customerService.find();
}


@UseGuards(RoleGuard)
@Roles('WAITER')
@Post('/')
createCustomer(@Body() custData: CustomerDTO){

    return this.customerService.createCustomer(custData)

}

@UseGuards(RoleGuard)
@Roles('WAITER')
@Patch(':id')
updateCustomer(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<CustomerDTO>)
{
    return this.customerService.updateCustomer(id, updateData)
    
}


}
