import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.schema';
import { ToHashPassword } from 'src/helpers/hasher.helper';
import { ToUserResponse } from 'src/helpers/ToResponse.helpers';
import { ActivityService } from 'src/activity/activity.service';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name)private readonly userModel:Model<UserDocument>,private activityService:ActivityService){}

  async create(createUserDto: CreateUserDto) {
    const { password,...u} = createUserDto
    console.log(password)
    const user = await new this.userModel({username:u.username,password:await ToHashPassword(password),roles:u.roles})
    user.save()
    await this.activityService.logActivity({ action: "Create", resource: "Post", description: "Creted a new post", payload: user })
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

  async delete(id:string) {
    const user = this.userModel.findById(id)
    
    if (!user)
      throw new HttpException('No user present with the given id', HttpStatus.NOT_FOUND)

    this.userModel.deleteOne({id:id})
    return "User is Deleted"
  }


  async getUserById(id: string) {
    const user = await (await this.userModel.findById(id))
    if (!user) throw new HttpException('No user present with the given id', HttpStatus.NOT_FOUND)
    return ToUserResponse(user)
  }
  
}
