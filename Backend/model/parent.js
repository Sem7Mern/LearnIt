import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;
