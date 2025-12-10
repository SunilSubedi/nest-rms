import { Injectable } from '@nestjs/common';
import { OrderItemService } from 'src/order-item/order-item.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TableService } from 'src/table/table.service';

@Injectable()
export class OrderService {

    constructor( 
        private readonly primsa: PrismaService,
        private readonly orderItemService: OrderItemService,
        private readonly tableService: TableService
             
    ){}


    async createOrder(dto: any){


        return  this.primsa.$transaction( async (tx) => {

        
        const order = await tx.order.create({
            data:{
                tableId: dto.tableId,
                waiterId: dto.waiterId,
                customerId: dto.customerId ?? null
            },
        });

        // create order items Automatically
        const createdItems = await this.orderItemService.createMany(
            order.id,
            dto.items,
        );


        const total =  createdItems?.reduce((sum,item) => sum + item.price, 0)


        await tx.table.update({
             where:{ id: dto.tableId},
             data:{ status: "OCCUPIED"}
        })

        await tx.order.update({
             where:{ id: order.id},
             data: { total},
        });

        return tx.order.findUnique({
             where:{ id: order.id},
             include:{ orderItems: {
                include:{
                    menuItem: true,
                }
             }
            }
        })

        })


    }


}
