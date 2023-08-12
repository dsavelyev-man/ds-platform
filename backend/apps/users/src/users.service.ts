import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { genSaltSync, hashSync } from 'bcryptjs';
import { GetAuthTokenDto } from './dto/get-auth-token.dto';

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

  hashPassword(password: string) {
    const salt = genSaltSync(10);

    return hashSync(password, salt);
  }

  create(data: CreateUserDto) {
    const user = this.usersRepository.create({
      email: data.email,
      name: data.name,
      password: this.hashPassword(data.password),
    });

    return user.save();
  }

  async getAuthToken(data: GetAuthTokenDto) {
    const user = await this.usersRepository.findOneBy({
      email: data.email,
    });

    return user;
  }
}
