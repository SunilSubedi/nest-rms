import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { PasswordResetService } from 'src/password-reset/password-reset.service';
import { EmailService } from 'src/email/email.service';
import { BadRequestException } from '@nestjs/common';


@Injectable()
export class AuthService {
     constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
        private passwordResetService: PasswordResetService,
        private emailService: EmailService
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
         console.log(email)
         const user =  await this.usersService.findOne(email);
         if(!user)
         { 
             throw new NotFoundException("User Not Found")
         }
         const token = randomBytes(32).toString("hex")
         console.log("Plain token", token);
         const hash = await bcrypt.hash(token,10);
         
         const sendData = {
            email,
            hash
         }
       await this.passwordResetService.createResetToken(sendData)
         
             
           await  this.emailService.sendResetPasswordEmail(email, token)
           return { message: "Reset email sent" };
            
      


   }  



   async passwordReset(data: any)
   {
       try
       {
               const { token, password, email} = data;
               console.log( token, password)
               const passReset =  await this.passwordResetService.findToken(email)

               const isValid = await bcrypt.compare(token, passReset.tokenHash)
              console.log(email);


            if (!isValid || passReset.expiry < new Date(Date.now())) {
              throw new BadRequestException("Invalid or expired token");
              }

                return await this.usersService.updatePassword(email,password)
               
         
         

       }catch(error)
       {
          throw new HttpException(error, 400)
       }
   }
    


}
