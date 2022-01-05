import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/index.module';
import { plainToClass, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { RegisterUser } from './entities/User';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2551);
}
// bootstrap();


const data = {
  userName: 'codegorgeous',
  userPassword: '12312',
  userEmail: '2460481461@qq.com',
  verificationCode: ''
}
const newData = plainToClass(RegisterUser, data);
console.log(newData);
validate(newData).then(error => {
  console.log(error);
})
