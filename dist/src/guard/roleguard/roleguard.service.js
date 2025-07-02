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
exports.RoleGuardService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let RoleGuardService = class RoleGuardService {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles)
            return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user?.roles)
            throw new common_1.ForbiddenException('No roles Assigned');
        const hasRole = requiredRoles.some((role) => user.roles.includes(role));
        if (!hasRole) {
            throw new common_1.ForbiddenException('You do not have the required role');
        }
        return true;
    }
};
exports.RoleGuardService = RoleGuardService;
exports.RoleGuardService = RoleGuardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RoleGuardService);
//# sourceMappingURL=roleguard.service.js.map