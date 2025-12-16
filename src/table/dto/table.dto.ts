import { Exclude, Expose, Transform } from "class-transformer";
import { IsNumber, IsEnum } from "class-validator";

export class TableDTO{

    @IsNumber()
    tableNo: number;


    @IsNumber()
    capacity: number;

    @IsEnum(['AVAILABLE', 'OCCUPIED','RESERVED'])
    status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED' = 'AVAILABLE'; 




}

export class TableOutPutDTO{


    @Expose()
    tableNo: number;

    @Expose()
    id: number;


    @Expose()
    capacity: number;





    @Expose()
    status:"AVAILABLE" | "OCCUPIED" | "RESERVED";



    @Exclude()
    createdAt: Date;

    constructor(partial: Partial<TableOutPutDTO>){
        Object.assign(this, partial)
    }
}