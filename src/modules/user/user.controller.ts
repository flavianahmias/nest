import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../entity/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  createUser(@Body() user: User) {
    return this.userService.create(user);
  }
}
