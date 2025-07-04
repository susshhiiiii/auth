import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    private readonly JWT_SECRET;
    Login(loginDto: LoginDto): Promise<{
        accessToken: any;
    }>;
    verifyToken(token: string): Promise<any>;
}
