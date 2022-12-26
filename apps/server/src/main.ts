import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { F } from './types';

const PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
  console.log(`Now Listening on port ${PORT}`);
}

bootstrap();
