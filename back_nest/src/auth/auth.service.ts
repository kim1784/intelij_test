import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/./create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<boolean> {
    const result = await this.userRepository.create(createUserDto);
    if (!(result === null)) {
      return true;
    }
  }

  //
  // findAll() {
  //   return `This action returns all auth`;
  // }

  async login(reqData: UserEntity) {
    const userInfo = await this.userRepository.findOneBy({ id: reqData.id });
    if (userInfo === null) {
      return { resultcode: -1 };
    } else if (!(reqData.pw === userInfo.pw)) {
      return { resultcode: -2 };
    }
    return { resultcode: 1, name: userInfo.name };
  }

  // update(id: number) {
  //   return `This action updates a #${id} auth`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
