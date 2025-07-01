import * as bcrypt from 'bcrypt'
import { SaltOrRounds } from 'constantsss'

export function ToHashPassword(password: string):Promise<string> {
    const hashPassword=bcrypt.hash(password,SaltOrRounds)
    return hashPassword
}

export function ComparePassword(insertedPassword: string, actualPassword):Promise<boolean> {
    return bcrypt.compare(insertedPassword,actualPassword)
}