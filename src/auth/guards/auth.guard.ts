/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    if(gqlReq){
      const { loginInput } = ctx.getArgs();
      gqlReq.body = loginInput;
      return gqlReq;
    }
    throw new UnauthorizedException();
  }
}
