// import {SampleService} from "../services/sample.service";
import {SampleHelper} from "../helpers/sample.helper";

export class SampleController {
    constructor() {}

    public sample(callback: Function): void {
        // SampleService.getSampleResponse((response: {[s: string]: any}): void => {
            callback({
                // error: response.error,
                error: false,
                posts: SampleHelper.getSample()
            });
        // });
    }

    public sampleIds(callback: Function): void {
        callback({
            error: false,
            ids: SampleHelper.getSampleIds()
        });
    }

    public sampleInfo(sampleId: number, callback: Function): void {
        callback({
            error: false,
            info: SampleHelper.getSampleDetail(sampleId)
        });
    }
}