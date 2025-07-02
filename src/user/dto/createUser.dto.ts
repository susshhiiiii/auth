import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty } from "class-validator";
import { Role } from "../entities/user.schema";

export class CreateUserDto{
    @ApiProperty()
    @IsNotEmpty()
    username: string
    
    @ApiProperty()
    @IsNotEmpty()
    password: string
    
    @ApiProperty({enum:Role,default:Role.User})
    @IsNotEmpty()
    roles:Role
}