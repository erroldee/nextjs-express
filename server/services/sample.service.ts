import {SampleModel} from "../models/sample.model";

export class SampleService {
    static getSampleResponse(callback: Function): void {
        let sampleModel = new SampleModel().model;
        let newSample = new sampleModel({
            sam: 'sam',
            ple: 'ple'
        });
        let response = {
            error: true
        };

        newSample.save().then((result: any): void => {
            console.log({
                error: false,
                success: result
            });

            response = {
                error: false
            };
        }).catch((err: any) => {
            console.log({
                error: true,
                code: 500,
                message: 'DBFailure: Failed to create',
            });
        }).finally(() => {
            callback(response);
        });
    }
}