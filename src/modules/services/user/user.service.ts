import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { RoleEnum } from 'src/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async create(user: User) {
    const existUser = await this.userRepository.findOne({
      where: { name: user.name },
    });

    if (!existUser) {
      const createUser = await this.userRepository.insert({
        ...user,
        role: RoleEnum.User,
      });
      return createUser;
    }
  }

  // JWT Authentication
  async findOne(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    return user;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });

    console.log('user');
    return user;
  }

  async findUsers() {
    return this.userRepository.find();
  }

  async changeUserRole(userId: number, role: RoleEnum) {
    const user = await this.userRepository.findOneOrFail({
      where: { id: userId },
    });

    if (user) {
      user.role = role;
      await this.userRepository.save(user);

      return await this.userRepository.findOne({
        where: {
          id: userId,
        },
      });
    }
  }
}
