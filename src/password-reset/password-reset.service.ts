import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordResetInterface } from './interface/password.reset.interface';

@Injectable()
export class PasswordResetService {

            constructor(private readonly prisma: PrismaService){}

    async createResetToken(data:PasswordResetInterface)
    {
        

        //   return  await this.prisma.passwordResets.create({
        //         data:{
        //             token:data.hash,
        //             email:data.email,
        //             expiry: new Date(Date.now() + 1000 * 60 * 5),// 5 minutes
                    
        //         }
        //     });

        
        return await this.prisma.passwordResets.upsert({
             where: {email: data.email},
             update:{
                tokenHash: data.hash,
                expiry: new Date( Date.now() + 5 * 60 * 1000)

             },
             create:{
                 tokenHash: data.hash,
                 email: data.email,
                 expiry: new Date( Date.now() + 5 * 60 * 1000)
             }
        })


    }        
    async findToken(email: string)
    {
       return await this.prisma.passwordResets.findFirstOrThrow({
            where:{
                email,
            }
           });


    }      
           


      

}
