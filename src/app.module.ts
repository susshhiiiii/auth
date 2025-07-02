import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './guard/authguard/authguard.service';
import { AuthGuardModule } from './guard/authguard/authguard.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/authentication'), UserModule, AuthModule, AuthGuardModule],
  providers: [AuthGuardService],

})
export class AppModule {
  
}
