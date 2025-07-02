import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty } from "class-validator";

export class LoginDto{
    @ApiProperty()
    @IsNotEmpty()
    username: string
    
    @ApiProperty()
    @IsNotEmpty()
    password:string
}