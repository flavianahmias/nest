import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { RoleEnum } from 'src/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async create(user: User) {
    await this.userRepository.insert({ name: 'test2' });
  }

  async findOne(username: string) {
    const users = [
      {
        userId: 1,
        username: 'string',
        password: 'string',
        role: RoleEnum.Admin,
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
        role: 0,
      },
    ];

    return users.find((user) => user.username === username);
  }

  async findUsers() {
    return this.userRepository.find();
  }
}
