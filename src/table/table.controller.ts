import { Controller, Get, Post, Body, UseGuards, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { TableService } from './table.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { TableDTO } from './dto/table.dto';
import { RoleGuard } from 'src/auth/gaurd/role.guard';
import { Roles } from 'src/auth/gaurd/roles.decorator';


@Controller('table')
@UseGuards(AuthGuard)
export class TableController {

constructor(private readonly tableService: TableService){}


@Get('/')
findAll(){
    return this.tableService.findAll();
}


@UseGuards(RoleGuard)
@Roles('WAITER', 'CASHIER')
@Post('/')
createTable(@Body() tableData: TableDTO)
{
     return this.tableService.createTable(tableData);
}



@UseGuards(RoleGuard)
@Roles('WAITER','CASHIER')
@Patch(':id')
updateTable(@Param('id', ParseIntPipe) id: number, @Body() tableData: Partial<TableDTO>){

    return this.tableService.updateTable(id, tableData);
}






}
