import mongoose from 'mongoose';
import {Constants} from "../constants/constants";

// we'll import all the schemas here and return them
// on the mongo connection object
// for use in the handlers
import SampleSchema from "../schemas/sample.schema";

const connectToMongo = async () => {
    const connection = await mongoose.createConnection(
        `mongodb://${Constants.mongoServer}:${Constants.mongoPort}/${Constants.mongoDB}`,
        {
            useNewUrlParser: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useUnifiedTopology: true
        }
    );

    const Samples = connection.model("Samples", SampleSchema);

    return {
        connection,
        models: {
            Samples
        }
    };
}

export default connectToMongo;