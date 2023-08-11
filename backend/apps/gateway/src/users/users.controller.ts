import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

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
}
