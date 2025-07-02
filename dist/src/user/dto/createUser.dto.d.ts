import { Role } from "../entities/user.schema";
export declare class CreateUserDto {
    username: string;
    password: string;
    roles: Role;
}
