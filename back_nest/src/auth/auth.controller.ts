import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../common/auth/jwt.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtTokenDto } from '../common/dto/jwt-token.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ description: '로그인' })
  @ApiResponse({ status: 200, description: 'Jwt 토큰 발급', type: JwtTokenDto })
  signin(@Request() req) {
    return this.authService.signin(req.user);
  }
}
