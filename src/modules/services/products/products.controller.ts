import {
  Controller,
  Get,
  Post,
  Res,
  Param,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Products } from 'src/modules/entity/producst.entity';
import { ProductCategoryEnum } from 'src/enums/products.enum';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async create(@Param('product') product: Products, @Res() res: Response) {
    console.log(product);
    const productCreated = await this.productsService.createProduct(product);
    // if (productCreated) {
    //   return res.status(HttpStatus.CREATED).send(product);
    // } else {
    //   return res
    //     .status(HttpStatus.INTERNAL_SERVER_ERROR)
    //     .send('Produto já existe');
    // }
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
}
