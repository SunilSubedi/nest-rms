import { IsNumber, IsOptional, IsString } from "class-validator";

export class MenuItemsDTO{
     
     @IsString()
     name: string;

     @IsString()
     description: string

     @IsString()
     price: string;

     @IsString()
     category: string;

     @IsOptional()
     @IsString()
     imageUrl:string ;
}