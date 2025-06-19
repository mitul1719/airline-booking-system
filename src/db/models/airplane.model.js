const { Schema, default: mongoose } = require("mongoose");

const airplaneSchema = new Schema(
    {
        modelNumber: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
            max: 1000,
        },
    },
    {
        timestamps: true,
    }
);

const AirPlane = mongoose.model("AirPlane", airplaneSchema);
module.exports = AirPlane;
