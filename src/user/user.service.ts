import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.schema';
import { ToHashPassword } from 'src/helpers/hasher.helper';
import { ToUserResponse } from 'src/helpers/ToResponse.helpers';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name)private readonly userModel:Model<UserDocument>){}

  async create(createUserDto: CreateUserDto) {
    const { password,...u} = createUserDto
    console.log(password)
    const user = await new this.userModel({username:u.username,password:await ToHashPassword(password),roles:u.roles})
    user.save()
    return ToUserResponse(user)
  }

  async findAll() {
    const users = await this.userModel.find().exec()
    return users.map((user)=>ToUserResponse(user))
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ username: email }).exec()
    return user
  }  
}

//Slippers
//Multivits
//Controller
//Gym Shoe  
