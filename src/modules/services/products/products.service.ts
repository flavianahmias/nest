import { Inject, Injectable } from '@nestjs/common';

import { Products } from 'src/modules/entity/producst.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: Repository<Products>,
  ) {}

  async createProduct(product: Products) {
    const checkProduct = await this.productsRepository.findOne({
      where: { name: 'test' },
    });
    console.log(checkProduct);

    // if (!checkProduct) {
    // const newProduct = await this.productsRepository.insert(product);
    // return newProduct;
    // }
  }

  async getProducts() {
    return this.productsRepository.find();
  }
}
