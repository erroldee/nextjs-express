import axios from "axios";
import {Constants} from "../constants/constants";

export class IndexServices {
    static getSample = async () => {
        const { data } = await axios.get(Constants.hostURL + "/api/sample");
        return data;
    };
}