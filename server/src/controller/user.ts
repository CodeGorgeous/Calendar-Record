import { Controller, Get, Post, Query, Body, Bind } from '@nestjs/common';
import { UserService } from '../service/user';
import { plainToClass } from 'class-transformer';
import { LoginUser, RegisterUser } from '../entities/User/index';
import { IResponse } from '../types';

@Controller()
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Get('/api/login')
    @Bind(Query())
    private login(data: any): Promise<IResponse> {
      return this.appService.login(plainToClass(LoginUser, data));
    }
    @Post('/api/register')
    @Bind(Body())
    private register(data: any): Promise<IResponse> {
      return this.appService.register(plainToClass(RegisterUser, data));
    }
}
