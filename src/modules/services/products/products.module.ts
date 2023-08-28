import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/modules/database/database.module';
import { productsProviders } from 'src/modules/repositories/products.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...productsProviders, ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
('');
