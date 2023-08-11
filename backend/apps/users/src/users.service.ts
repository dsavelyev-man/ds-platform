import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello From Users!!!';
  }

  getPaginatedAll() {
    return this.usersRepository.find();
  }

  create() {
    
  }
}
