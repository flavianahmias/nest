import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Response } from 'express';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  createUser(@Body() user: User, @Res() res: Response) {
    return this.userService.create(user);
  }
}
