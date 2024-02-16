import { Controller } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @Put('/login')
  // async login(@Body() data: CreateUserDto, @Res() res: Response) {
  //   const userData = await this.userService.findOne(data.id);
  //
  //   if (!userData) {
  //     throw new UnprocessableEntityException('해당 계정이 존재하지 않습니다');
  //   }
  //
  //   const isAuth = await bcrypt.compare(data.pw, userData.pw);
  //
  //   if (!isAuth) {
  //     throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다');
  //   }
  //   this.authService.setRefreshToken({ userData, res });
  //
  //   // const jwt = this.authService.getAccessToken({ userData });
  //
  //   return res.json(jwt);
  // }
}
