import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    private readonly JWT_SECRET;
    Login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    verifyToken(token: string): Promise<string | jwt.JwtPayload>;
}
