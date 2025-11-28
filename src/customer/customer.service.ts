import { HttpException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
    constructor(private readonly prisma: PrismaService){}

    async find(){
       try{
            return await  this.prisma.customers.findMany()
       }catch(error)
       {
           throw new HttpException('Error Finding Customers', 502)
       } 
      
    }

    async createCustomer(custData:any){

        try
        {
            await this.prisma.customers.create({
                 data:{
                     ...custData
                 }
            })
            return {
                "message":"new customer created"
            }

        }catch(error)
        {
            throw new HttpException("Error While Creating User", 502);
        }

    }


    async updateCustomer(id: number, updateCustomer: any)
    {
        
        try
        {
            await this.prisma.customers.update({
                 where :{
                    id,
                 },
                 data:{
                    ...updateCustomer
,                 }
            })
        
        }catch(error)
        {
            throw new InternalServerErrorException("Error While Updating User")
        }
    


    }

    
}
