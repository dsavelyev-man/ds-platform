import { Inject, Module } from '@nestjs/common';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: parseInt(process.env.MICROSERVICES_USERS_PORT),
          host: process.env.MICROSERVICES_USERS_HOST,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class ServicesModule {}
