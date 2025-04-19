const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
    res.status(StatusCodes.OK).json({
        message: "Welcome to the API",
        version: "1.0.0",
    });
};

module.exports = {
    info,
};
