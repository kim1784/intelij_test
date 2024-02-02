import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  // getHelloWorld(): string {
  //   return 'Hello World!!';
  // }

  async create(createUserDto: CreateUserDto) {
    console.log('test : 빽단 도착');
    const result = await this.userRepository.findOneBy({
      id: createUserDto.id,
    });
    console.log(createUserDto);
    console.log(result);
    if (result === null) {
      console.log('test : 아이디 생성');
      // DB insert 방식 - 1. Querybuilder 방식
      // await this.userRepository
      //   .createQueryBuilder()
      //   .insert()
      //   .into(UserEntity)
      //   .values([
      //     {
      //       id: createUserDto.id,
      //       pw: createUserDto.pw,
      //       name: createUserDto.name,
      //     },
      //   ])
      //   .execute();
      // DB insert 방식 - 1. save 메소드 방식
      const user = new UserEntity();
      user.id = createUserDto.id;
      user.pw = createUserDto.pw;
      user.name = createUserDto.name;
      await this.userRepository.save(user);
      return { resultcode: 1 };
    } else {
      return null;
    }
  }

  //
  // findAll() {
  //   return `This action returns all auth`;
  // }

  async login(reqData: UserEntity) {
    const userInfo = await this.userRepository.findOneBy({ id: reqData.id });
    console.log(userInfo);
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
