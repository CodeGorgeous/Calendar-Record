"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
const uuid_1 = require("uuid");
class RegisterUser extends User_1.default {
    constructor() {
        super(...arguments);
        this.userUID = (0, uuid_1.v4)().slice(0, 8);
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '用户邮箱不能为空' }),
    (0, class_validator_1.MinLength)(6, { message: '用户邮箱长度至少为6个字符' }),
    (0, class_validator_1.MaxLength)(18, { message: '用户邮箱长度至多为18个字符' }),
    __metadata("design:type", String)
], RegisterUser.prototype, "userEmail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '验证码不能为空' }),
    (0, class_validator_1.MinLength)(4, { message: '验证码长度至少为4个字符' }),
    (0, class_validator_1.MaxLength)(6, { message: '验证码长度至多为6个字符' }),
    __metadata("design:type", String)
], RegisterUser.prototype, "verificationCode", void 0);
exports.RegisterUser = RegisterUser;
