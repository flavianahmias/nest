import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Response } from 'express';
import { Public } from 'src/plugins/guard';
import { RoleEnum } from 'src/enums/role.enum';
import { changeUserRoleDTO } from '../dtos/changeUserRole.dto';

@ApiTags('user')
// @ApiBearerAuth('JWT-auth')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Public()
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  async createUser(@Param('user') user: User, @Res() res: Response) {
    const createdUser = await this.userService.create(user);

    if (createdUser) {
      return res.status(HttpStatus.CREATED).send('created');
    } else {
      return res.status(HttpStatus.CONFLICT).send('usuario já existe');
    }
  }

  @Get('all-users')
  getAllUser() {
    return this.userService.findUsers();
  }

  @Get('get-user-by-id')
  async getUserById(@Param('id') id: number, @Res() res: Response) {
    const user = await this.userService.getUserById(id);
    console.log(user);

    return res.status(HttpStatus.OK).send(user);
  }

  @Post('change-role')
  async changeUserRole(
    @Param('user') user: changeUserRoleDTO,
    @Res() res: Response,
  ) {
    const userChanged = await this.userService.changeUserRole(
      user.userId,
      user.role,
    );

    if (userChanged) {
      return res.status(HttpStatus.OK).send('User updated');
    } else {
      return res.status(HttpStatus.NOT_MODIFIED).send('error');
    }
  }
}
