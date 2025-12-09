import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//import { users } from './mock-data/users.mock.data';
import { User } from './interface/users.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UsersService {
    constructor( 
        private prismaService: PrismaService,
        private eventEmitter: EventEmitter2

    ){}
   // private readonly usersArray = users;

    async findOne(email: string): Promise<User> {
        try{
             const user = await this.prismaService.user.findUnique({
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

            //console.log('Registering new user:', data);

           const newUser = await this.prismaService.user.create({
                data
            });
           
            // create a event to send user email
            this.eventEmitter.emit('user.registered', {
                 id: user.id,
                 email: user.email
            })
            
            return newUser;
        }
        catch(error){
            throw new HttpException('Unable to register user',501);
        }



    }



    async updatePassword(email:string, password:string)
    {
        const hassPassword =  await bcrypt.hash(password,10)
        return  await this.prismaService.user.update({
                where: {
                    email,
                },
                data:{
                    password: hassPassword
                }
            })

    }





}
