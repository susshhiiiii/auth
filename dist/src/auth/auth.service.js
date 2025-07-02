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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const hasher_helper_1 = require("../helpers/hasher.helper");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
        this.JWT_SECRET = '6f76fc097c09a069d81550c1927e4569ee53a927a0225e1a3fdc48fa8ead774b35f75cb85cb18f8397c6b5424d22d2029e272c19ac17aa49bd9e45577a6c37b1';
    }
    async Login(loginDto) {
        const user = await this.userService.findByEmail(loginDto.username);
        if (!user)
            throw new common_1.UnauthorizedException();
        const validateUser = (0, hasher_helper_1.ComparePassword)(loginDto.password, user.password);
        if (!validateUser)
            throw new common_1.UnauthorizedException();
        const payload = {
            sub: user._id,
            username: user.username,
            roles: user.roles
        };
        const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' });
        return { accessToken: token };
    }
    async verifyToken(token) {
        try {
            return jwt.verify(token, this.JWT_SECRET);
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Invalid Token');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
//# sourceMappingURL=auth.service.js.map