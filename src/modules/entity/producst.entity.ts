import { ApiProperty } from '@nestjs/swagger';
import { ProductCategoryEnum } from 'src/enums/products.enum';
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
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  category: ProductCategoryEnum;

  @ApiProperty()
  @Column()
  value: number;

  @ApiProperty()
  @Column()
  quantity: number;
}
