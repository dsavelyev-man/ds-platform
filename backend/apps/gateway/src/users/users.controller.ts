import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from 'apps/users/src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) {}

  @Get('hello')
  getHello() {
    return this.client.send('get.hello', '');
  }

  @Get()
  getPaginatedAll() {
    return this.client.send('get.paginated.all', '');
  }

  @Post()
  registration(@Body() body: CreateUserDto) {
    return this.client.send('create', body);
  }
}
