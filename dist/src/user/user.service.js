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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./entities/user.schema");
const hasher_helper_1 = require("../helpers/hasher.helper");
const ToResponse_helpers_1 = require("../helpers/ToResponse.helpers");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const { password, ...u } = createUserDto;
        console.log(password);
        const user = await new this.userModel({ username: u.username, password: await (0, hasher_helper_1.ToHashPassword)(password), roles: u.roles });
        user.save();
        return (0, ToResponse_helpers_1.ToUserResponse)(user);
    }
    async findAll() {
        const users = await this.userModel.find().exec();
        return users.map((user) => (0, ToResponse_helpers_1.ToUserResponse)(user));
    }
    async findByEmail(email) {
        const user = await this.userModel.findOne({ username: email }).exec();
        return user;
    }
    async delete(id) {
        const user = this.userModel.findById(id);
        if (!user)
            throw new common_1.HttpException('No user present with the given id', common_1.HttpStatus.NOT_FOUND);
        this.userModel.deleteOne({ id: id });
        return "User is Deleted";
    }
    async getUserById(id) {
        const user = await (await this.userModel.findById(id));
        if (!user)
            throw new common_1.HttpException('No user present with the given id', common_1.HttpStatus.NOT_FOUND);
        return (0, ToResponse_helpers_1.ToUserResponse)(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map