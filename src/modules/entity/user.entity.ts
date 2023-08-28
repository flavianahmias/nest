import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/enums/role.enum';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';

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
  email: string;

  @Column({ nullable: true })
  role?: RoleEnum;

  products?: [];
}
