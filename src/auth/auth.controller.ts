import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //ibps so it
  @Post()
  login(@Body()loginDto: LoginDto) {
      return this.authService.Login(loginDto)
  }
}
