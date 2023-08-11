import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(3, 64)
  name: string;

  @Length(6, 64)
  password: string;
}
