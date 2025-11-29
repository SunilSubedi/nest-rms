import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TableService {

    constructor(private readonly prisma: PrismaService){}

    async findAll(){
         return await this.prisma.table.findMany();
    }


    async createTable(tableData: any){
         try{

            await this.prisma.table.create({
                 data: {
                    ...tableData
                 }
            })

         }catch(error)
         {
                throw new HttpException("Cannot Create Error",502);
         }
    }


    async updateTable( id: number, tableData: any){

        try{

            await this.prisma.table.update({
                 where:{
                    id
                 },
                 data:{
                    ...tableData
                 }
            })
             
        }catch(error)
        {
            throw new HttpException("Cannot Update Table", 502);
        }

    }


}
