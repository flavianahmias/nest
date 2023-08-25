import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../repositories/user.provider';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../guard/roles/roles.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
