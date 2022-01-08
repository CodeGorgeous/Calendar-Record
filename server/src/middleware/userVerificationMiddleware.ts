import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import createResponse from '../utils/createResponse';
import { EResponseState } from '../types';
import { getConnection } from 'typeorm';
import { RegisterUser } from '../entities/User/index';

// 用户身份验证中间件处理
@Injectable()
export default class UserVerificationMiddleware implements NestMiddleware {
  public async use(req: Request, res: Response, next: NextFunction) {
    const manager = getConnection().manager;
    if (!req.body.uid) {
        res.send(createResponse(EResponseState.error, '用户uid未填写', {}))
    } else {
        // 验证用户
        const result = await manager.find(RegisterUser, { userUID: req.body.uid })
        if (result.length > 0) {
            next();
        } else {
            res.send(createResponse(EResponseState.fail, '用户uid不存在', {}));
        }
    }
  }
}
