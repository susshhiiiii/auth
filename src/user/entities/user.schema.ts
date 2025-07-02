import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Role{
    Admin = 'Admin',
    User='User'
}
@Schema({timestamps:true})
export class User {
    @Prop({ required: true })
    username: string
    
    @Prop({ required: true })
    password: string    
    
    @Prop({ required: false })
    token?: string
    
    @Prop({ required: false })
    tokenExpiry?: string
    
    @Prop()
    roles:Role
}

export const UserSchema = SchemaFactory.createForClass(User)
export type UserDocument= User & Document   