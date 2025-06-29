const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { LoggerConfig } = require("../config");
const { DynamicResponse } = require("../utils/common");

/**
 * POST : /airplanes
 * req-body : {modelNumber: String, capacity: Number}
 * @description : create a new airplane
 */
module.exports.createAirplane = async (req, res) => {
    try {
        const airplaneData = req.body;
        const airplane = await AirplaneService.createAirplane(airplaneData);

        return res.status(StatusCodes.CREATED).json(DynamicResponse.getResponse(StatusCodes.CREATED, getReasonPhrase(StatusCodes.CREATED), airplane, null));
    } catch (error) {
        LoggerConfig.log.error(error.message);

        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        return res.status(statusCode).json(DynamicResponse.getResponse(statusCode, getReasonPhrase(statusCode), null, error.message.split(",")));
    }
};

module.exports.getAirplanes = async (req, res) => {
    try {
        const airplanes = await AirplaneService.getAirplanes();

        return res.status(StatusCodes.OK).json(DynamicResponse.getResponse(StatusCodes.OK, getReasonPhrase(StatusCodes.OK), airplanes, null));
    } catch (error) {
        LoggerConfig.log.error(error.message);

        return res.status(error.statusCode).json(DynamicResponse.getResponse(error.statusCode, getReasonPhrase(error.statusCode), null, error.message.split(",")));
    }
};
