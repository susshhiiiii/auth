"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogFilter = void 0;
const common_1 = require("@nestjs/common");
const error_log_service_1 = require("./error-log.service");
let ErrorLogFilter = class ErrorLogFilter {
    constructor(errorLogsService) {
        this.errorLogsService = errorLogsService;
    }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : 500;
        const message = exception instanceof common_1.HttpException
            ? exception.getResponse()
            : exception?.message || 'Unknown error';
        console.log(request, exception);
        await this.errorLogsService.CreateLog({
            statusCode: status,
            message: typeof message === 'string' ? message : JSON.stringify(message),
            path: request.url,
            method: request.method,
            reason: exception?.message || 'Unknown error',
            stack: exception?.stack || null,
        });
        response.status(status).json({
            statusCode: status,
            message,
        });
    }
};
exports.ErrorLogFilter = ErrorLogFilter;
exports.ErrorLogFilter = ErrorLogFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [error_log_service_1.ErrorLogService])
], ErrorLogFilter);
//# sourceMappingURL=error-log.filter.js.map