import { ErrorLogService } from './error-log.service';
export declare class ErrorLogController {
    private logService;
    constructor(logService: ErrorLogService);
    getAllLogs(): Promise<import("./dto/error-log.dto").ErrorDto[]>;
}
