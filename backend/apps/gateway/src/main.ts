import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.GATEWAY_PORT, () =>
    console.log(`Gateway stated on ${process.env.GATEWAY_PORT}`),
  );
}
bootstrap();
