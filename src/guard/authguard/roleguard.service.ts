import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles, ROLES_KEY } from 'src/common/decorators/roles.decorator';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
       const roles = this.reflector.get(Roles, context.getHandler());
        if (!roles) return true
        
        const {user} = context.switchToHttp().getRequest()
        
        console.log(user,'sushant')
        // if (!user ||!user['roles']) {
        //     throw new Forbi  ddenException('No roles Assigned')
        // }
        // const hasRole = requiredRoles.some(role => user.roles.includes(role));

        // if (!hasRole) {
        // throw new ForbiddenException('You do not have the required role');
        // }
        // return true     
    }        
}
