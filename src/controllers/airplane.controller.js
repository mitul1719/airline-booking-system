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

        return res.status(error.statusCode).json(DynamicResponse.getResponse(error.statusCode, getReasonPhrase(error.statusCode), null, error.message.split(",")));
    }
};
