import { IsEmail, Length } from 'class-validator';

export class GetAuthTokenDto {
  @IsEmail()
  email: string;

  @Length(6, 64)
  password: string;
}
