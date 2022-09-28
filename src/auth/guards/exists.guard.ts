/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable, CanActivate, Inject, BadRequestException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class ExistsGuard implements CanActivate {
    constructor(@Inject(LoginService) private loginService: LoginService) {}
  async canActivate(context: ExecutionContext): Promise<any> {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    if(gqlReq){
        const args = Object.values(ctx.getArgs())[0];
        const email = args['email'], username = args['username'];
        const emailCheck = await firstValueFrom(this.loginService.findOneEmail(email));
        const usernameCheck = await firstValueFrom(this.loginService.findOneUserName(username));
        if (emailCheck || usernameCheck) {
            throw new BadRequestException();
        }
        return true;
    }
  }
}
