import axios from "axios";
import {Constants} from "../../constants/constants";

export class PostServices {
    static getSampleIds = async () => {
        const { data } = await axios.get(Constants.hostURL + "/api/sample/sampleIds");
        return data;
    };

    static getSampleInfo = async (id: number) => {
        const { data } = await axios.post(Constants.hostURL + "/api/sample/sampleInfo", {
            id
        });
        return data;
    };
}