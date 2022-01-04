import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  login(): string {
    return '用户登陆';
  }
  register(name: string, password: string): string {
    return `用户注册: 用户名:${name}, 用户密码:${password}`;
  }
}
