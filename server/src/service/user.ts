import { Injectable } from '@nestjs/common';
import { RegisterUser, LoginUser } from '../entities/User/index';
import createResponse from '../utils/createResponse';
import { EResponseState, IResponse } from '../types';
import validateResponse from '../utils/validateResponse';
import { getConnection } from 'typeorm';

@Injectable()
export class UserService {
  public async login(data: LoginUser): Promise<IResponse> {
    try {
      const result = await validateResponse(data);
      if (result) { return result; }
      const manager = getConnection().manager;
      // 查询数据库中此用户名是否已经使用
      const result2 = await manager.find(RegisterUser, { userName: data.userName });
      if (result2.length <= 0) { return createResponse(EResponseState.fail, '此用户不存在', {})};
      if (result2[0].userPassword !== data.userPassword) { return createResponse(EResponseState.fail, '用户密码不正确', {})};
      return createResponse(EResponseState.success, '登陆成功', {});
    } catch (error) {
      return createResponse(EResponseState.error, '未知错误', {});
    }
  }
  public async register(data: RegisterUser): Promise<IResponse> {
    try {
      // 数据类型校验
      const result = await validateResponse(data);
      if (result) { return result };
      const manager = getConnection().manager;
      // 查询数据库中此用户名是否已经使用
      const result2 = await manager.find(RegisterUser, { userName: data.userName });
      if (result2.length > 0) { return createResponse(EResponseState.fail, '此用户名已被使用', {})};
      // TODO: 未对验证码进行验证
      // 数据库保存数据
      return await manager.save(data).then(() => {
        return createResponse(EResponseState.success, '注册成功', {});
      }).catch(error => {
        return createResponse(EResponseState.fail, '注册失败', {});
      })
    } catch (error) {
      return createResponse(EResponseState.error, '未知错误', {});
    }
  }
}
