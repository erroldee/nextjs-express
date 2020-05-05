// Sample mongoose model
import * as mongoose from 'mongoose';

const SampleSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    date: {
        type: String
    }
});

export default SampleSchema;