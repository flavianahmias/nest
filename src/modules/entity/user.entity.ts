import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';

export enum Role {
  General,
  Administrator,
}

@Entity()
export class User {
  constructor(dto: Partial<User>) {
    Object.assign(this, dto);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  role?: Role;
}
