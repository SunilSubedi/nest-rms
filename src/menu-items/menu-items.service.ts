import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuItemsService {

    constructor(private readonly prisma: PrismaService){}

    async findAll(){
        try{

            return  await this.prisma.meunItems.findMany();

        }catch(error)
        {
            throw new HttpException("Cannot find menu items",404);

        }
    }


    async create(filePath: string, menuItemsData: any)
    {
        menuItemsData.imageUrl = filePath
        const {price, ...menuItems} = menuItemsData;

        console.log(menuItemsData)
        try
        {
                await this.prisma.meunItems.create({
                    data: {
                        price: Number(price),
                        ...menuItems
                    }
                }) 

        }catch(error)
        {
            throw new HttpException(error,404);
        }
    }


}
