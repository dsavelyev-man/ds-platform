import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ClientsModule } from '@nestjs/microservices';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [UsersController],
})
export class UsersModule {}
