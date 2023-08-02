import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
          host: "0.0.0.0",
          port: parseInt(process.env.MICROSERVICES_USERS_PORT),
      },
    },
  );

  console.log("sdassa")

  await app.listen();
}
bootstrap();
