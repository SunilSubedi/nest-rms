import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private readonly prisma: PrismaService){}

  async createMany(orderId: number, items:{ menuItemId:number, quantity:number} [])
  {

        const created = []

        for ( const item of items)
        {
             const menu = await this.prisma.menuItem.findUniqueOrThrow({
                 where: { id: item.menuItemId}
             });
             
             const totalprice = Number(menu.price) * item.quantity;

             const orderItem = await this.prisma.orderItem.create({
                   data:{
                      orderId,
                      menuItemId: item.menuItemId,
                      quantity: item.quantity,
                      price: totalprice


                   },

             });
          
             created.push(orderItem);

             return created

        }     

  }



}
