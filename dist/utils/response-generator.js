"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateResponse(message, statusCode, data) {
    const apiResponse = {
        message: message,
        statusCode: statusCode,
        data: data ? data : null
    };
    return JSON.stringify(apiResponse);
}
exports.default = generateResponse;
