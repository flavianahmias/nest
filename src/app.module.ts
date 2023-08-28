import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/services/user/user.module';
import { AuthModule } from './modules/guard/auth/auth.module';
import { ProductsModule } from './modules/services/products/products.module';

@Module({
  // imports: [UserModule, AuthModule],
  imports: [UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
