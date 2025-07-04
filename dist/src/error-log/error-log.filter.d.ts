import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ErrorLogService } from './error-log.service';
export declare class ErrorLogFilter implements ExceptionFilter {
    private errorLogsService;
    constructor(errorLogsService: ErrorLogService);
    catch(exception: any, host: ArgumentsHost): Promise<void>;
}
