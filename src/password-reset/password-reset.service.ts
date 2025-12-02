import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordResetInterface } from './interface/password.reset.interface';

@Injectable()
export class PasswordResetService {

            constructor(private readonly prisma: PrismaService){}

    async createResetToken(data:PasswordResetInterface): Promise<boolean>
    {
        try
        {

            await this.prisma.passwordResets.create({
                data:{
                    token:data.hash,
                    email:data.email,
                    expiry: new Date(Date.now() + 1000 * 60 * 5),// 5 minutes
                    
                }
            });

            return true;

        }catch(error)
        {
                throw new HttpException(error, 502)
        }
    }        

}
