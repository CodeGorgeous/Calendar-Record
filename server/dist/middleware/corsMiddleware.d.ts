import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export default class CorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
