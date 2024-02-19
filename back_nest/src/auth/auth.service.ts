import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { UsersEntity } from '../users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(id: string, password: string): Promise<any> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new UnauthorizedException('가입된 유저가 아닙니다');
    }
    if (user && (await bcrypt.compare(password, user.pw))) {
      delete user.pw;
      return user;
    } else {
      throw new BadRequestException('패스워드 확인이 필요합니다');
    }
  }

  async signin(user: UsersEntity) {
    if (this.validateUser) {
      user.updated_at = new Date();
      const signinDateUpdate = this.userService.updateSignin(user);
      if (signinDateUpdate) return this.createToken(user);
    }
  }
}
