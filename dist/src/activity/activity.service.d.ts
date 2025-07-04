import { Model } from 'mongoose';
import { ActitvityDocument, Activity } from './activity-Schema';
export declare class ActivityService {
    private activityModel;
    constructor(activityModel: Model<ActitvityDocument>);
    logActivity(params: {
        action: string;
        resource: string;
        description?: string;
        payload?: any;
    }): Promise<import("mongoose").Document<unknown, {}, ActitvityDocument, {}> & Activity & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
