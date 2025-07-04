import { UserResponseInterface } from "constantsss";
import { ErrorDto } from "src/error-log/dto/error-log.dto";
import { ErrorLog } from "src/error-log/entities/error-log.schema";
import { ResponseUser } from "src/user/dto/responseUser.dto";
import { User } from "src/user/entities/user.schema";
export declare function ToUserResponse(user: User & UserResponseInterface): ResponseUser;
export declare function ToLogResponse(logerror: ErrorLog): ErrorDto;
