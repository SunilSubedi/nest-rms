import { Controller, UseGuards, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { MenuItemsDTO } from './dto/menu-items.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('menu-items')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class MenuItemsController {

    constructor(private readonly menuItemsService : MenuItemsService){}

    @Get('/')
    findAll(){
        return this.menuItemsService.findAll()
    }



    @Post('/create')
    @UseInterceptors(FileInterceptor('image',{
        storage: diskStorage({
            destination:'./uploads/menu-items',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname)
                callback(null, `${uniqueSuffix}${ext}`);
            }
        })
    }))
    create(@UploadedFile() file: Express.Multer.File,@Body() itemsData: MenuItemsDTO)
    {

       return this.menuItemsService.create(file.path, itemsData)

    }





}
