import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/user/entities/user.schema';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        if (!requiredRoles) return true
        
        const {user} = context.switchToHttp().getRequest()
        
        if (!user?.roles)
            throw new ForbiddenException('No roles Assigned')
        
        const hasRole = requiredRoles.some(role => user.roles.includes(role));

        if (!hasRole) {
        throw new ForbiddenException('You do not have the required role');
        }
        return true     
    }        
}
