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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const error_log_schema_1 = require("./entities/error-log.schema");
const ToResponse_helpers_1 = require("../helpers/ToResponse.helpers");
const mongoose_2 = require("@nestjs/mongoose");
let ErrorLogService = class ErrorLogService {
    constructor(errorLogModel) {
        this.errorLogModel = errorLogModel;
    }
    async CreateLog(createRequest) {
        const log = await this.errorLogModel.create(createRequest);
        return (0, ToResponse_helpers_1.ToLogResponse)(log);
    }
    async GetErroLog() {
        const logs = await this.errorLogModel.find().exec();
        return logs.map((log) => (0, ToResponse_helpers_1.ToLogResponse)(log));
    }
};
exports.ErrorLogService = ErrorLogService;
exports.ErrorLogService = ErrorLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(error_log_schema_1.ErrorLog.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ErrorLogService);
//# sourceMappingURL=error-log.service.js.map