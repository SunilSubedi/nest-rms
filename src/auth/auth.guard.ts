import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard  implements CanActivate{
    constructor(private jwtService: JwtService){}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();//verify token from header
        const token = request.cookies['token']// 
        // const request = context.switchToHttp()
        if ( !token) {
            throw new UnauthorizedException();

        }
        try {
            console.log('Attempting to verify token...');
            // Don't pass options here since the JwtModule is already configured globally
            const payload = await this.jwtService.verifyAsync(token);
            request['user'] = payload;
            console.log('Token verified successfully...');
            

        }catch(error){
            console.log('JWT verification failed:', error.message);
            throw new UnauthorizedException({message: 'Invalid or expired token'
            })
        }
        return true;


        
    }

    // private extractTokenFromHeader(request: Request): string | undefined {
    //     const [type, token] = request.headers.authorization?.split(' ') ?? [];
    //     return type === 'Bearer' ? token : undefined;

    // }


}