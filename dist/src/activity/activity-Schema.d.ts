export type ActitvityDocument = Activity & Document;
export declare class Activity {
    action: string;
    resource: string;
    description: string;
    payload?: any;
}
export declare const ActivityModel: import("mongoose").Schema<Activity, import("mongoose").Model<Activity, any, any, any, import("mongoose").Document<unknown, any, Activity, any> & Activity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Activity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Activity>, {}> & import("mongoose").FlatRecord<Activity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
