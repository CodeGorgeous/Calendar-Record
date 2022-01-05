import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/index.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2551);
}
bootstrap();
