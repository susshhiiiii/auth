import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RoleGuardService } from './guard/authguard/roleguard.service';
import { ErrorLogService } from './error-log/error-log.service';
import { ErrorLogFilter } from './error-log/error-log.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api Authenication')
    .setDescription('APi for Authentication')
    .addBearerAuth()
    .setVersion('1.0')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  
  SwaggerModule.setup('api', app, documentFactory)

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new RoleGuardService(reflector));


  
  const errorLogsService = app.get(ErrorLogService);
  app.useGlobalFilters(new ErrorLogFilter(errorLogsService));
  
  await app.listen(3000);
}
bootstrap();
