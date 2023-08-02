import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {ClientProxyFactory} from "@nestjs/microservices";
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, {
    provide: "USERS_SERVICE",
    useFactory: () => {
      return ClientProxyFactory.create({
        options: {
          host: process.env.MICROSERVICES_USERS_HOST,
          port: process.env.MICROSERVICES_USERS_PORT,
        }
      })
    }
  }],
})
export class AppModule {}
