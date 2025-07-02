    import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
    import { Observable } from 'rxjs';
    import { AuthService } from 'src/auth/auth.service';

    @Injectable()
    export class AuthGuardService implements CanActivate {
        constructor(private authService: AuthService) { }
        
        
      async canActivate(context: ExecutionContext): Promise<boolean> {
        const req: Request = context.switchToHttp().getRequest();

        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer '))
          throw new UnauthorizedException('No token provided');

        const token = authHeader.split(' ')[1];
        const payload = await this.authService.verifyToken(token);

        req['user'] = payload; 
        return true;
      }
        
    }
