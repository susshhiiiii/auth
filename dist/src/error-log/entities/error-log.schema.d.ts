import { Document, Types } from "mongoose";
export declare class ErrorLog extends Document {
    message: string;
    statusCode: number;
    path: string;
    method: string;
    userId: Types.ObjectId;
    reason: string;
    stack: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const ErrorLogSchema: import("mongoose").Schema<ErrorLog, import("mongoose").Model<ErrorLog, any, any, any, Document<unknown, any, ErrorLog, any> & ErrorLog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ErrorLog, Document<unknown, {}, import("mongoose").FlatRecord<ErrorLog>, {}> & import("mongoose").FlatRecord<ErrorLog> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
