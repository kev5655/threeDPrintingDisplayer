import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: [
  //     'http://localhost:3000',
  //     'http://localhost:8080',
  //     'https://localhost:8081',
  //   ],
  // });
  await app.listen(8080);
}
bootstrap();
