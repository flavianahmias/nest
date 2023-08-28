import { DataSource } from 'typeorm';
import { Products } from '../entity/producst.entity';

export const productsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Products),
    inject: ['DATA_SOURCE'],
  },
];
