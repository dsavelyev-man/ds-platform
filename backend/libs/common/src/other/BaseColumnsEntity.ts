import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
} from 'typeorm';

export class BaseColumnsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
