import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { TableModule } from 'src/table/table.module';

@Module({
  imports:[OrderItemModule, TableModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
