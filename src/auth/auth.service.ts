import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
     constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
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
    


}
