import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {ClientProxyFactory} from "@nestjs/microservices";
import { UsersController } from './users.controller';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register<RedisClientOptions>({
        // @ts-ignore
        store: redisStore,
        isGlobal: true,
        host: process.env.CACHE_REDIS_HOST,
        port: process.env.CACHE_REDIS_PORT,
        password: process.env.CACHE_REDIS_PASSWORD
      })
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
