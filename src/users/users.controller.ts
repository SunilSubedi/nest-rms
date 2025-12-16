import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {

    

   @Get('/me')
   getMe(@Req() request:any){
      console.log(request.user)
      return request.user
   }

}
