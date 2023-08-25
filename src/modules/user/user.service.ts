import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

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
        username: 'john',
        password: 'changeme',
        role: 0,
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
        role: 1,
      },
    ];

    return users.find((user) => user.username === username);
  }
}
