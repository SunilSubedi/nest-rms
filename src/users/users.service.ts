import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//import { users } from './mock-data/users.mock.data';
import { User } from './interface/users.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor( private prismaService: PrismaService){}
   // private readonly usersArray = users;

    async findOne(email: string): Promise<User> {
        try{
             const user = await this.prismaService.users.findUnique({
                where: { email }
             });
            if( !user ){
                throw new Error('User not found');
            }
            return user;
        }
        catch(error){
            throw new Error('User not found');
        }
    }


    async registerUser(user: User){

        try{
            const password = user.password;
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            const data = { ...user, password: hashedPassword };

            console.log('Registering new user:', data);

            await this.prismaService.users.create({
                data
            })
        }
        catch(error){
            throw new HttpException('Unable to register user',501);
        }



    }



    async updatePassword(email:string, password:string)
    {
        const hassPassword =  await bcrypt.hash(password,10)
        return  await this.prismaService.users.update({
                where: {
                    email,
                },
                data:{
                    password: hassPassword
                }
            })

    }





}
