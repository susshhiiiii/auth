import { Model } from 'mongoose';
import { ErrorLog } from './entities/error-log.schema';
import { CreateLogDto } from './dto/create-log.dto';
import { ErrorDto } from './dto/error-log.dto';
export declare class ErrorLogService {
    private errorLogModel;
    constructor(errorLogModel: Model<ErrorLog>);
    CreateLog(createRequest: CreateLogDto): Promise<ErrorDto>;
    GetErroLog(): Promise<ErrorDto[]>;
}
