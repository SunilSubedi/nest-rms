import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CustomerDTO{
    @IsString()
    name: string;


    @IsEmail()
    email: string;

    @IsOptional()
    //@Type(() => Number)
    //@IsNumber()
    @IsString()
    phone:number;

    @IsOptional()
    address:string;


}