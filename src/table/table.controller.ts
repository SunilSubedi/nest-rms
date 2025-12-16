import { Controller, Get, Post, Body, UseGuards, Patch, Param, ParseIntPipe, UseInterceptors, ClassSerializerInterceptor, HttpException } from '@nestjs/common';
import { TableService } from './table.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { TableDTO, TableOutPutDTO } from './dto/table.dto';
import { RoleGuard } from 'src/auth/gaurd/role.guard';
import { Roles } from 'src/auth/gaurd/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('table')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class TableController {

constructor(private readonly tableService: TableService){}


@Get('/')
async findAll(){
    const tables = await this.tableService.findAll();
    const transferTables =  tables.map((table) => new TableOutPutDTO({
         id: table.id,
         tableNo:table.tableNo,
         capacity: table.capacity,
         status:table.status
    }));

    return transferTables;
}





@UseGuards(RoleGuard)
@Roles('WAITER', 'CASHIER')
@Post('/create')
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


@UseGuards(RoleGuard)
@Roles('WAITER','CASHIER')
@Get(':id')
async getTableInfo(@Param('id', ParseIntPipe) id: number){
    const table = await this.tableService.findTable(id);  

    if(table)
        return new TableOutPutDTO(table)
    else
         throw new HttpException("Table Not found", 404)
}



}
