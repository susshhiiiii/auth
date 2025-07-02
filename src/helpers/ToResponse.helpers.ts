import { UserResponseInterface } from "constantsss";
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