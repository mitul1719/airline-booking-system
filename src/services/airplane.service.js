const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

module.exports.createAirplane = async (airplaneData) => {
    try {
        return await airplaneRepository.create(airplaneData);
    } catch (error) {
        if (error.name === "ValidationError") {
            throw new AppError(error.message, StatusCodes.BAD_REQUEST);
        }

        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports.getAirplanes = async () => {
    try {
        return await airplaneRepository.findAll();
    } catch (error) {
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};
