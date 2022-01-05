import { Injectable } from '@nestjs/common';
import { RegisterUser, LoginUser } from '../entities/User/index';
import createResponse from '../utils/createResponse';
import { EResponseState, IResponse } from '../types';
import validateResponse from 'src/utils/validateResponse';

@Injectable()
export class UserService {
  public async login(data: LoginUser): Promise<IResponse> {
    try {
      let result = await validateResponse(data);
      if (result) {
        return result;
      }
      return createResponse(EResponseState.success, '登陆成功', {});
    } catch (error) {
      return createResponse(EResponseState.error, '未知错误', {});
    }
  }
  public async register(data: RegisterUser): Promise<IResponse> {
    try {
      let result = await validateResponse(data);
      if (result) {
        return result;
      }
      return createResponse(EResponseState.success, '注册成功', {});
    } catch (error) {
      return createResponse(EResponseState.error, '未知错误', {});
    }
  }
}
