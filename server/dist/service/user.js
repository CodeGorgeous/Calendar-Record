"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const createResponse_1 = require("../utils/createResponse");
const types_1 = require("../types");
const validateResponse_1 = require("../utils/validateResponse");
let UserService = class UserService {
    async login(data) {
        try {
            let result = await (0, validateResponse_1.default)(data);
            if (result) {
                return result;
            }
            return (0, createResponse_1.default)(types_1.EResponseState.success, '登陆成功', {});
        }
        catch (error) {
            return (0, createResponse_1.default)(types_1.EResponseState.error, '未知错误', {});
        }
    }
    async register(data) {
        try {
            let result = await (0, validateResponse_1.default)(data);
            if (result) {
                return result;
            }
            return (0, createResponse_1.default)(types_1.EResponseState.success, '注册成功', {});
        }
        catch (error) {
            return (0, createResponse_1.default)(types_1.EResponseState.error, '未知错误', {});
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
