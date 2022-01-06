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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../service/user");
const class_transformer_1 = require("class-transformer");
const index_1 = require("../entities/User/index");
let UserController = class UserController {
    constructor(appService) {
        this.appService = appService;
    }
    login(data) {
        return this.appService.login((0, class_transformer_1.plainToClass)(index_1.LoginUser, data));
    }
    register(data) {
        return this.appService.register((0, class_transformer_1.plainToClass)(index_1.RegisterUser, data));
    }
};
__decorate([
    (0, common_1.Get)('/api/login'),
    (0, common_1.Bind)((0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/api/register'),
    (0, common_1.Bind)((0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_1.UserService])
], UserController);
exports.UserController = UserController;
