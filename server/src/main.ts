import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/index.module';
import 'reflect-metadata';
import { createConnection } from "typeorm";
import { initMysqlDate } from './utils/initMysqlDate';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2551);
}
createConnection().then(async connection => {
  console.log('数据库连接成功');
  bootstrap();
  // 初始化Date表
  initMysqlDate();
  }).catch(error => console.log(error));
