/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable, CanActivate, Inject, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../auth.service';

// STILL W.I.P. - NOT WORKING YET

@Injectable()
export class CredGuard implements CanActivate {
    constructor(@Inject(AuthService) private authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<any> {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    if(gqlReq){
        const args = Object.values(ctx.getArgs())[0];
        const email = args['email'], password = args['password'];
        const user = await firstValueFrom(this.authService.validateUser(email, password));
        if (!user) {
            throw new UnauthorizedException();
        }
        //return true promise
        return user;
    }
  }
}
