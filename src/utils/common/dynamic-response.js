module.exports.getResponse = (statusCode, message, data, actualError) => {
    const response = {
        ok: statusCode >= 200 && statusCode < 300,
        message: message || (statusCode >= 200 && statusCode < 300 ? "Request was successful" : "Request failed"),
        data: data || {},
        error: {},
    };

    if (statusCode >= 400) {
        response.error = actualError;
        response.data = null;
    }

    return response;
};
