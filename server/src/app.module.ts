import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './controller/index';
import { UserService } from './service/user';
import corsMiddleware from './middleware/corsMiddleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})

// 应用中间件
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(corsMiddleware).forRoutes('api');
  }
}
