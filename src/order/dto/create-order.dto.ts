import { Type } from "class-transformer";
import { IsArray, IsIn, IsInt, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator";


class OrderItemDto {
    @IsInt()
    menuItemId: number;

    @IsInt()
    quantity: number;

     
}


export class CreateOrderDto{
     @IsInt()
     tableId: number;

     @IsInt()
     waiterId: number;

     @IsOptional()
     @IsInt()
     customerId?: number;

     @IsArray()
     @ValidateNested({ each: true})
     @Type(() => OrderItemDto)
     orderItems: OrderItemDto[]


}