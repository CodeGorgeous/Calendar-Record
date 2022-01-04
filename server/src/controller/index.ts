import { Controller, Get, Post, Query, Body, Bind } from '@nestjs/common';
import { UserService } from '../service/user';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('/api/login')
  @Bind(Query())
  login(data: any): string {
    return this.appService.login();
  }
  @Post('/api/register')
  @Bind(Body())
  async register(data: any): Promise<string> {
    return await this.appService.register(data.a, data.b);
  }
}
