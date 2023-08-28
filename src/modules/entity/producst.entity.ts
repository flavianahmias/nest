import { ApiProperty } from '@nestjs/swagger';
import { ProcutsEnum } from 'src/enums/products.enum';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Products {
  constructor(dto: Partial<Products>) {
    Object.assign(this, dto);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @Column()
  type: ProcutsEnum;

  @ApiProperty()
  @Column()
  value: number;

  @ApiProperty()
  @Column()
  quantity: number;
}
