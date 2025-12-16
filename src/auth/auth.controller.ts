import { Controller, HttpStatus, HttpCode, UseGuards, UseInterceptors, ClassSerializerInterceptor, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterOutputDto, ResetPasswordInputDto, ResetPasswordOutputDto, ResetPasswordRequestDto, SignInDto } from './dto/auth.dto';
import { Post, Body, Get, Patch } from '@nestjs/common';
import { RegisterDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';
import  type { Response } from 'express';
import cookieParser from 'cookie-parser';



@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService

    ) {}
    

    @Post('login')
    async signIn(@Body() signInDto: SignInDto,@Res({ passthrough: true}) res: Response){
        const {access_token } = await this.authService.signIn(signInDto.email, signInDto.password); 

        res.cookie('token', access_token, {
              httpOnly: true,// http only cookes for security.
              secure: false, //work for http connection if true https
              sameSite: 'lax'

        })

        return {

            "message":"Signed in Successfully"
        }


    } 


    @Post('logout')
    logout(@Res ({ passthrough: true}) res: Response){

        res.clearCookie('token',{
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        })

        return {
            "message":"Signed Out Successfully"
        }
    }


    @Post('register')
    @UseInterceptors(ClassSerializerInterceptor)
    async register(@Body() registerDto: RegisterDto){

        return new RegisterOutputDto( await this.userService.registerUser(registerDto));

    }


   


    @Post('password-reset-request')
    passResetRequest(@Body() email: ResetPasswordRequestDto){
        return this.authService.passResetRequest(email);

    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Patch('password-reset')
    async passReset(@Body() resetData:ResetPasswordInputDto)
    {
         const data = await this.authService.passwordReset(resetData);
         return new ResetPasswordOutputDto(data) 
    }



}
