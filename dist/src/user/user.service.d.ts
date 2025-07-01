import { CreateUserDto } from './dto/createUser.dto';
import { Model } from 'mongoose';
import { UserDocument } from './entities/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<import("./dto/responseUser.dto").ResponseUser>;
    findAll(): Promise<import("./dto/responseUser.dto").ResponseUser[]>;
}
