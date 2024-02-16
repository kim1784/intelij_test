import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as process from 'process';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}

  async getAccessToken({ user }) {
    return this.jwtService.sign({
      id: user.id,
      email : user.email,
    },
      {
      secret: process.env.ACCESS_TOKEN_SECRET_KEY,
      expiresln: '5m',
      }
    );
  }

  async setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      {
        id: user.id,
        sub: user.email,
      }
    )
  }
}
