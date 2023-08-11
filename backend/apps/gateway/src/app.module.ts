import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UsersModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
