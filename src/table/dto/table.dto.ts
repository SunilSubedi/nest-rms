import { IsNumber, IsEnum } from "class-validator";

export class TableDTO{

    @IsNumber()
    tableNo: number;


    @IsNumber()
    capacity: number;

    @IsEnum(['AVAILABLE', 'OCCUPIED','RESERVED'])
    status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED' = 'AVAILABLE'; 




}