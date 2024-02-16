import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// AuthGuard : guard 의 전략을 실행시켜주는 함수가 내장된 라이브러리
//    -> Guard 가 실행될 때 jwt.strategy.ts 코드를 실행시켜서 Guard 에 필요한 로직이 실행
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
