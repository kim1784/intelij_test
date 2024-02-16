// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Payload } from '../auth/jwt.payload';
//
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   // JwtStrategy 선언
//   constructor() {
//     super({
//       // 헤더 Authentication에서 Bearer 토큰으로부터 jwt를 추출
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       // jwt 생성시 비밀키로 사용할 텍스트(노출 x)
//       secretorKey: 'secret',
//       // jwt 만료를 무시할 것인지(기본값 : false)
//       ignoreException: false,
//     });
//   }
//
//   async validate(payload: Payload) {
//     const user = await this.authService.validate(payload);
//
//     if (user) {
//       // request.user에 해당 내용을 넣어준다(Payload 라이브러리가 해줌)
//       return user;
//     } else {
//       throw new UnauthorizedException('접근 오류');
//     }
//   }
// }
