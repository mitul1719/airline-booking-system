const { StatusCodes, getReasonPhrase } = require("http-status-codes");

const { DynamicResponse } = require("../utils/common");
const { MODEL_NO_REQUIRED } = require("../utils/messeges");

//TODO:implement JOI

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber || !req.body.modelNumber?.trim()) {
        return res.status(StatusCodes.BAD_REQUEST).json(DynamicResponse.getResponse(StatusCodes.BAD_REQUEST, getReasonPhrase(StatusCodes.BAD_REQUEST), null, MODEL_NO_REQUIRED));
    }

    next();
}

module.exports = {
    validateCreateRequest,
};
