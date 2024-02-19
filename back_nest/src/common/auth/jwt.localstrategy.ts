import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../../auth/auth.service';
import { UsersService } from '../../users/users.service';

//
@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {
    super({ usernameField: 'id', passwordField: 'pw' });
  }

  async validate(id: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(id, password);
    if (!user) {
      throw new UnauthorizedException('해당 계정이 존재하지 않습니다');
    } else {
      return user;
    }
  }
}
