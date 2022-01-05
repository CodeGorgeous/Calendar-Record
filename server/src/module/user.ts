import { Module } from '@nestjs/common';
import { UserController } from '../controller/index';
import { UserService } from '../service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
