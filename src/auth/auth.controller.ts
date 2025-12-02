import { Controller, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResetPasswordRequestDto, SignInDto } from './dto/auth.dto';
import { Post, Body, Get } from '@nestjs/common';
import { RegisterDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';



@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService

    ) {}
    

    @Post('login')
    signIn(@Body() signInDto: SignInDto){
        return this.authService.signIn(signInDto.email, signInDto.password); 
    } 


    @Post('register')
    register(@Body() registerDto: RegisterDto){

        return this.userService.registerUser(registerDto);

    }


    @Post('password-reset-request')
    passResetRequest(@Body() email: ResetPasswordRequestDto){
        return this.authService.passResetRequest(email);

    }



}
