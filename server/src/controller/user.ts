import { Controller, Get, Post, Query, Body, Bind } from '@nestjs/common';
import { UserService } from '../service/user';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { RegisterUser } from '../entities/User';

@Controller()
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Get('/api/login')
    @Bind(Query())
    private login(data: any): string {
      console.log('');
      return this.appService.login();
    }
    @Post('/api/register')
    @Bind(Body())
    private register(): string {
      // 平面对象转化为类实例
      const data = {
        userName: 'codegorgeous',
        userPassword: '12312',
        userEmail: '2460481461@qq.com',
        verificationCode: ''
      }
      const newData = plainToClass(RegisterUser, data as object);
      console.log(newData);
      validate(newData).then(error => {
        console.log(error);
      })
      return this.appService.register(newData.userName, newData.userPassword);
    }
}
