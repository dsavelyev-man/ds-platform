import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RpcValidationFilter } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        port: parseInt(process.env.MICROSERVICES_USERS_PORT),
        host: '0.0.0.0',
      },
    },
  );

  app.useGlobalFilters(new RpcValidationFilter());

  await app.listen();

  console.log(
    `Microservice users started on ${process.env.MICROSERVICES_USERS_PORT}`,
  );
}
bootstrap();
