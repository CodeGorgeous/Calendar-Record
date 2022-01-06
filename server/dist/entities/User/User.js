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
const class_validator_1 = require("class-validator");
class User {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '用户名不能为空' }),
    (0, class_validator_1.MinLength)(2, { message: '用户名长度至少为1个字符' }),
    (0, class_validator_1.MaxLength)(20, { message: '用户名长度至多为20个字符' }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '用户密码不能为空' }),
    (0, class_validator_1.MinLength)(6, { message: '用户密码长度至少为6个字符' }),
    (0, class_validator_1.MaxLength)(16, { message: '用户密码长度至多为16个字符' }),
    __metadata("design:type", String)
], User.prototype, "userPassword", void 0);
exports.default = User;
