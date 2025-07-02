import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthGuardService } from 'src/guard/authguard/authguard.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RoleGuardService } from 'src/guard/authguard/roleguard.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from './entities/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuardService, RoleGuardService)
  @Roles(Role.User)
  @UseGuards(AuthGuardService) 
  findAll() {
    return this.userService.findAll()
  }

  @ApiBearerAuth() 
  @Get('userInfo')  
  getUserInfo(@Request() request) {
    console.log(request.user)
    return request.user;
  }
}
