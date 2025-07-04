import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthGuardService } from 'src/guard/authguard/authguard.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RoleGuardService } from 'src/guard/authguard/roleguard.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from './entities/user.schema';
import { get } from 'mongoose';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBearerAuth()
  @Get()
  // @UseGuards(AuthGuardService, RoleGuardService)
  @UseGuards(AuthGuardService)
  @Roles(Role.User)
  findAll() {
    return this.userService.findAll()
  }
  
  @ApiBearerAuth() 
  @Get('userInfo')  
  @UseGuards(AuthGuardService) 
  getUserInfo(@Request() request) {
    return request.user;
  }

  @ApiBearerAuth()
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id)
  }

  @ApiBearerAuth()
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.getUserById(id)
  }

}
