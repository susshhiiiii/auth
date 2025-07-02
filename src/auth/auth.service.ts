import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { ComparePassword } from 'src/helpers/hasher.helper';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }
  private readonly JWT_SECRET = '6f76fc097c09a069d81550c1927e4569ee53a927a0225e1a3fdc48fa8ead774b35f75cb85cb18f8397c6b5424d22d2029e272c19ac17aa49bd9e45577a6c37b1'
  
  async Login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.username)    
    if (!user)
      throw new UnauthorizedException()

    const validateUser = ComparePassword(loginDto.password, user.password)
    if (!validateUser)
      throw new UnauthorizedException()
    const payload = {
      sub: user._id,
      username: user.username,      
      roles:user.roles
    }

    const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' })
    return {accessToken:token}
  }


  async verifyToken(token: string) {
    try {
      return jwt.verify(token,this.JWT_SECRET)
    }
    catch (err) {
      throw new UnauthorizedException('Invalid Token')      
    }
  }
}
