import { CreateUserDto } from './dto/createUser.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.schema';
import { ActivityService } from 'src/activity/activity.service';
export declare class UserService {
    private readonly userModel;
    private activityService;
    constructor(userModel: Model<UserDocument>, activityService: ActivityService);
    create(createUserDto: CreateUserDto): Promise<import("./dto/responseUser.dto").ResponseUser>;
    findAll(): Promise<import("./dto/responseUser.dto").ResponseUser[]>;
    findByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(id: string): Promise<string>;
    getUserById(id: string): Promise<import("./dto/responseUser.dto").ResponseUser>;
}
