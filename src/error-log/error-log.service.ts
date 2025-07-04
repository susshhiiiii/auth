/**
 * Error Logging Service
 */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ErrorLog } from './entities/error-log.schema';
import { CreateLogDto } from './dto/create-log.dto';
import { ToLogResponse } from 'src/helpers/ToResponse.helpers';
import { ErrorDto } from './dto/error-log.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ErrorLogService {
    constructor(@InjectModel(ErrorLog.name)private errorLogModel: Model<ErrorLog>) { }
    
    /**
     * Function for saving error log in database
     */
    async CreateLog(createRequest: CreateLogDto) {
        const log = await this.errorLogModel.create(createRequest)        
        return ToLogResponse(log)
    }
    /**
     * Function for getting all the Error Log through a route
     */
    async GetErroLog(): Promise<ErrorDto[]>{
        const logs =await this.errorLogModel.find().exec()
        return logs.map((log)=>ToLogResponse(log))
    }
}
