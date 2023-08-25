import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/plugins/guard';

class signInDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@Controller('login')
@ApiTags('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
