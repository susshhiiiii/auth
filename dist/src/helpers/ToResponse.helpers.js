"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToUserResponse = ToUserResponse;
function ToUserResponse(user) {
    const response = {
        username: user.username,
        password: user.password,
        token: user.token,
        tokenExpiry: user.tokenExpiry,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        roles: user.roles
    };
    return response;
}
//# sourceMappingURL=ToResponse.helpers.js.map