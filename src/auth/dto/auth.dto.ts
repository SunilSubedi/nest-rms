import { IsEmail, IsEnum, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class SignInDto {
    @IsEmail()
    email: string;


    @IsString()
    @MinLength(6)
    password: string;
}



export class RegisterDto  extends SignInDto{
    
    @IsOptional()
    id: number;
      
    @IsString()
    name: string;

    

    

    @IsEnum(['WAITER', 'ADMIN'])
    role: 'WAITER' | 'ADMIN' = 'WAITER';

}


export class ResetPasswordRequestDto {
    @IsEmail()
    email: string
}


export class ResetPasswordDto {
     @IsString()
     @MinLength(6)
     password: string;


     @IsString()
     token: string;


     @IsEmail()
     email: string;
}