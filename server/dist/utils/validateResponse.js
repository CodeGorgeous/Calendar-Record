"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const createResponse_1 = require("./createResponse");
const types_1 = require("../types");
function validateResponse(data) {
    return (0, class_validator_1.validate)(data).then(error => {
        if (error.length > 0) {
            const msg = (error.map(item => {
                let text = '';
                for (const key in item.constraints) {
                    text = item.constraints[key];
                }
                return text;
            })).join('|');
            return (0, createResponse_1.default)(types_1.EResponseState.fail, msg, {});
        }
        else {
            return;
        }
    });
}
exports.default = validateResponse;
