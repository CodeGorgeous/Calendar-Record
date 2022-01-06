"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const createResponse_1 = require("../utils/createResponse");
const types_1 = require("../types");
const corsWhiteList = ['localhost:2551'];
let CorsMiddleware = class CorsMiddleware {
    use(req, res, next) {
        if (corsWhiteList.includes(req.headers.host)) {
            next();
        }
        else {
            res.send((0, createResponse_1.default)(types_1.EResponseState.error, 'Prohibit cross domain access', {}));
        }
    }
};
CorsMiddleware = __decorate([
    (0, common_1.Injectable)()
], CorsMiddleware);
exports.default = CorsMiddleware;
