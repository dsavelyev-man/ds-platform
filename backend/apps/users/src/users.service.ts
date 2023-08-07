import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
}
