import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { appendFile } from "fs"
import { Role } from "../entities/user.schema"

export class ResponseUser{
    @ApiProperty()
    @IsNotEmpty()
    username: string
        
    @ApiProperty()
    @IsNotEmpty()
    password: string
            
    @ApiPropertyOptional()
    token?: string
    
    @ApiPropertyOptional()
    tokenExpiry?: string 
    
    @ApiPropertyOptional()
    createdAt?: string

    @ApiPropertyOptional()
    updatedAt?: string
    
    @ApiProperty()
    @IsNotEmpty()
    roles:Role
}