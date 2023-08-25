import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Response } from 'express';
import { RoleEnum } from 'src/enums/role.enum';
import { Roles } from 'src/plugins/roles';
import { Public } from 'src/plugins/guard';
import { RolesGuard } from '../guard/roles/roles.guard';

@ApiTags('user')
@ApiBearerAuth('JWT-auth')
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

  @Get()
  getAllUser() {
    return this.userService.findUsers();
  }
}
