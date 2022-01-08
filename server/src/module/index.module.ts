import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import CorsMiddleware from '../middleware/corsMiddleware';
import UserModule from './user';
import MessageModule from './message';

@Module({
  imports: [UserModule, MessageModule],
})

// 应用中间件
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    // 跨域中间件
    consumer.apply(CorsMiddleware).forRoutes('/');
  }
}
