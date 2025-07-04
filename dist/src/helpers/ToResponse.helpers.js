"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToUserResponse = ToUserResponse;
exports.ToLogResponse = ToLogResponse;
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
function ToLogResponse(logerror) {
    const response = {
        message: logerror.message,
        statusCode: logerror.statusCode,
        path: logerror.path,
        method: logerror.method,
        stack: logerror.stack,
        reason: logerror.reason,
        createdAt: logerror.createdAt,
        updatedAt: logerror.updatedAt
    };
    return response;
}
//# sourceMappingURL=ToResponse.helpers.js.map