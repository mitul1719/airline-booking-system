const mongoose = require("mongoose");
const { AirplaneSeeder } = require("../db/seeders");

const connectDB = async (logger) => {
    return mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            if (logger) {
                logger.info("Database connected");
                // AirplaneSeeder.seedAirplanes();
            }
        })
        .catch((err) => {
            if (logger) {
                logger.error("Database connection error:", err);
                throw new Error("Database Connection error");
            }
        });
};

module.exports = { connectDB };
