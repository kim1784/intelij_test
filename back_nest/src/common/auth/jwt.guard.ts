import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// AuthGuard : guard 의 전략을 실행시켜주는 함수가 내장된 라이브러리
//    -> Guard 가 실행될 때 jwt.localstrategy.ts 코드를 실행시켜서 Guard 에 필요한 로직이 실행
export class LocalAuthGuard extends AuthGuard('local') {}

// -> AuthGuard는 local이라는 파라미터를 Passport에게 전달하여, 해당 Guard사용 시 LocalStrategy를 사용
// 1. 로그인 시 사용하는 LocalStrategy
// 2. 로그인 후 인증 전반을 담당하는 JwtStrategy
// 3. Access Token 만료 시 Refresh Token을 검증하는 RefreshStrategy

