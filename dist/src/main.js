"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const roleguard_service_1 = require("./guard/authguard/roleguard.service");
const error_log_service_1 = require("./error-log/error-log.service");
const error_log_filter_1 = require("./error-log/error-log.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Api Authenication')
        .setDescription('APi for Authentication')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new roleguard_service_1.RoleGuardService(reflector));
    const errorLogsService = app.get(error_log_service_1.ErrorLogService);
    app.useGlobalFilters(new error_log_filter_1.ErrorLogFilter(errorLogsService));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map