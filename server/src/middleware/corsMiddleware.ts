import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import createResponse from '../utils/createResponse';
import { EResponseState } from '../types';

// CORS白名单
const corsWhiteList: string[] = ['localhost:2551'];

// CORS中间件处理
@Injectable()
export default class CorsMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    if (corsWhiteList.includes(req.headers.host)) {
      next();
    } else {
      res.send(
        createResponse(
          EResponseState.error,
          'Prohibit cross domain access',
          {},
        ),
      );
    }
  }
}
