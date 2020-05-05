import axios from "axios";
import {Constants} from "../../constants/constants";
import mongooseMiddleware from "../../helpers/middleware.helper";

export class StaticPostServices {
    static getSampleIds = async () => {
        const {connection, models} = await mongooseMiddleware();

        const ids = await models.Samples.find({}, {id: 1});
        connection.close();

        return ids.map(data => {
            return data.id;
        });
    };

    static getSampleInfo = async (id: number) => {
        const {connection, models} = await mongooseMiddleware();

        const { title, date }: any = await models.Samples.findOne({ id });
        connection.close();

        return { id, title, date };
    };
}