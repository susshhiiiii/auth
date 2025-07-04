import { Logger } from "@nestjs/common";
import { log } from "console";
import { UserResponseInterface } from "constantsss";
import { ErrorDto } from "src/error-log/dto/error-log.dto";
import { ErrorLog } from "src/error-log/entities/error-log.schema";
import { ResponseUser } from "src/user/dto/responseUser.dto";
import { User } from "src/user/entities/user.schema";

export  function ToUserResponse(user: User &UserResponseInterface):ResponseUser {
    const response: ResponseUser = {
        username:user.username,
        password:user.password,
        token:user.token,
        tokenExpiry: user.tokenExpiry,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        roles:user.roles
    }
    return response
}

export function ToLogResponse(logerror: ErrorLog): ErrorDto  {
    const response: ErrorDto = {
        message: logerror.message,
        statusCode: logerror.statusCode,
        path: logerror.path,
        method: logerror.method,
        stack: logerror.stack,
        reason: logerror.reason,    
        createdAt: logerror.createdAt,
        updatedAt:logerror.updatedAt
    }
    return response
}