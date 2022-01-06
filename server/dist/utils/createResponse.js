"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createResponse(state, msg, data) {
    return {
        state,
        msg,
        data,
    };
}
exports.default = createResponse;
