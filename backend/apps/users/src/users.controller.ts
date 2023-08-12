import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

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

  @MessagePattern('create')
  create(@Payload() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }
}
