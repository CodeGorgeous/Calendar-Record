import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import CorsMiddleware from '../middleware/corsMiddleware';
import UserModule from './user';

@Module({
  imports: [UserModule],
})

// 应用中间件
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('/');
  }
}
