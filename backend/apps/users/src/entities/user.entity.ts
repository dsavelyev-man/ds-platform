import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseColumnsEntity } from '../../../../database/BaseColumnsEntity';

@Entity()
export class User extends BaseColumnsEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  @Exclude()
  password: string;
}
