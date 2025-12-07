import { Exclude } from "class-transformer";
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


export class RegisterOutputDto {
     @Exclude()
     password: string;

     constructor(partial: Partial<RegisterOutputDto>)
     {
         Object.assign(this, partial)
     }
}


export class ResetPasswordRequestDto {
    @IsEmail()
    email: string
}


export class ResetPasswordInputDto {
     @IsString()
     @MinLength(6)
     password: string;


    
     
}

export class ResetPasswordOutputDto {

    @Exclude()
    password: string;


    constructor( partial: Partial<ResetPasswordOutputDto>)
    {
         Object.assign(this, partial)

    }


}