import { forwardRef, Module } from '@nestjs/common';
import { AuthGuardService } from './authguard.service';
import { AuthModule } from 'src/auth/auth.module';
import { RoleGuardService } from './roleguard.service';

@Module({
    imports:[forwardRef(() => AuthModule)],
    providers:[AuthGuardService,RoleGuardService],
    exports:[AuthGuardService,RoleGuardService]
})
export class AuthGuardModule {}
