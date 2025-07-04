import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './guard/authguard/authguard.service';
import { AuthGuardModule } from './guard/authguard/authguard.module';
import { ErrorLogModule } from './error-log/error-log.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/authentication'),ActivityModule, UserModule, AuthModule, AuthGuardModule, ErrorLogModule],
  providers: [AuthGuardService],

})
export class AppModule {
  
}
  