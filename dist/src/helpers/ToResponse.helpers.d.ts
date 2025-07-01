import { UserResponseInterface } from "constantsss";
import { ResponseUser } from "src/user/dto/responseUser.dto";
import { User } from "src/user/entities/user.schema";
export declare function ToUserResponse(user: User & UserResponseInterface): ResponseUser;
