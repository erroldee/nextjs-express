// Sample mongoose model
import * as mongoose from 'mongoose';

interface SampleInterface extends mongoose.Document{
    sam: string;
    ple: string;
}

export class SampleModel {
    public schema: mongoose.Schema;
    public model: any;

    constructor() {
        this.schema = new mongoose.Schema({
            sam: {
                type: String,
                required: true
            },
            ple: {
                type: String
            }
        });

        this.model = mongoose.model<SampleInterface>("Sample", this.schema);
    }
}