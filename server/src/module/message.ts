import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MessageController } from '../controller/index';
import { MessageService } from '../service/index';
import UserVerificationMiddleware from '../middleware/userVerificationMiddleware';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
})
export default class MessageModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
      consumer.apply(UserVerificationMiddleware).forRoutes('/api/message');
    }
  }
