import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { appendFile } from "fs"

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
    updatedAt?:string

}