"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const authguard_service_1 = require("./guard/authguard/authguard.service");
const authguard_module_1 = require("./guard/authguard/authguard.module");
const error_log_module_1 = require("./error-log/error-log.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost/authentication'), user_module_1.UserModule, auth_module_1.AuthModule, authguard_module_1.AuthGuardModule, error_log_module_1.ErrorLogModule],
        providers: [authguard_service_1.AuthGuardService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map