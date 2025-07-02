import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./dto/responseUser.dto").ResponseUser>;
    findAll(): Promise<import("./dto/responseUser.dto").ResponseUser[]>;
    getUserInfo(request: any): any;
}
