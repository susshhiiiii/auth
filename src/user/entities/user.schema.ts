import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class User {
    @Prop({ required: true })
    username: string
    
    @Prop({ required: true })
    password: string    
    
    @Prop({ required: false })
    token?: string
    
    @Prop({ required: false })
    tokenExpiry?:string
}

export const UserSchema = SchemaFactory.createForClass(User)
export type UserDocument= User & Document   