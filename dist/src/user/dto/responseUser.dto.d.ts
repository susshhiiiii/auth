import { Role } from "../entities/user.schema";
export declare class ResponseUser {
    username: string;
    password: string;
    token?: string;
    tokenExpiry?: string;
    createdAt?: string;
    updatedAt?: string;
    roles: Role;
}
