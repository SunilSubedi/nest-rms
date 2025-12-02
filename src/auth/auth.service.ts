import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { PasswordResetService } from 'src/password-reset/password-reset.service';


@Injectable()
export class AuthService {
     constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
        private passwordResetService: PasswordResetService
    ) {}

     async signIn(email: string, password: string): Promise<{access_token: string}> {

        try {
              console.log('Attempting to sign in user:', email);
              const user = await this.usersService.findOne(email);
              console.log('Found user:');
              
             const isMatch =  await bcrypt.compare(password, user.password);


               if (!isMatch) {     
                  throw new UnauthorizedException("Invalid credentials"); 
               }
               else
               {

                  const payload = { sub: user.id, email: user.email, role: user.role };
                  console.log('Creating JWT with payload:');
                  const token = await this.jwtService.signAsync(payload);
                  console.log('JWT created successfully');
                  return {
                  access_token: token,
                 }

               }
              

             
        
         }catch (error) {
            throw new UnauthorizedException();
        }

     }

   async passResetRequest({email}:any){
       try
       {
         console.log(email)
         const user =  await this.usersService.findOne(email);
         if(user)
         { 
         const token = randomBytes(32).toString("hex")
         console.log("Plain token", token);
         const hash = await bcrypt.hash(token,20);
         
         const sendData = {
            email,
            hash
         }
         if(await this.passwordResetService.createResetToken(sendData))
         {
             
             return {
                "token":token
             }
         }  
       }else
       {
          throw new Error("Cannot Find a User");
       }



       }catch(error)
       {
            throw new HttpException(error, 400)
       }
   }  
    


}
