class ResponseHandler {

    /**
     * Sends a successful HTTP response to the client.
     *
     * @param {object} res - The Express server response object.
     * @param {object|Array} data - The data returned by the service function.
     * @param {number} [statusCode=200] - The HTTP status code.
     * @returns {object} The response sent to the client.
     */
    static handleRes(res, data, statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            data
        });
    }

    /**
     * Sends an error HTTP response to the client.
     *
     * @param {object} res - The Express server response object.
     * @param {Error} error - The error object containing the error message.
     * @param {number} [statusCode=500] - The HTTP status code.
     * @returns {object} The error response sent to the client.
     */
    static handleErr(res, error, statusCode = 500) {
        return res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = ResponseHandler