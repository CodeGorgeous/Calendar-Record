import { Controller, Get, Post, Query, Body, Bind } from '@nestjs/common';
import { UserService } from '../service/index';
import { plainToClass } from 'class-transformer';
import { LoginUser, RegisterUser } from '../entities/User/index';
import { IResponse } from '../types';

@Controller()
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Get('/api/login')
    @Bind(Query())
    private async login(data: any): Promise<IResponse> {
      return await this.appService.login(plainToClass(LoginUser, data));
    }
    @Post('/api/register')
    @Bind(Body())
    private async register(data: any): Promise<IResponse> {
      return await this.appService.register(plainToClass(RegisterUser, data));
    }
}
