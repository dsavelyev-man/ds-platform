import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('get.hello')
  getHello(): string {
    return this.usersService.getHello();
  }

  @MessagePattern('get.paginated.all')
  getPaginatedAll() {
    return this.usersService.getPaginatedAll();
  }
}
