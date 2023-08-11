import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.GATEWAY_PORT, () =>
    console.log(`Gateway stated on ${process.env.GATEWAY_PORT}`),
  );
}
bootstrap();
