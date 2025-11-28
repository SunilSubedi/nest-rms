import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class RoleGuard implements CanActivate{

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // Get Roles MetaData 

        const requiredRoles = Reflect.getMetadata('roles', context.getHandler())

        if(!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const { role } = request.user;
        console.log('User role from request:', role);
        
        return requiredRoles.includes(role);
        
    }

    
}


