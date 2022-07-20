import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { user, body } = context.switchToHttp().getRequest();
    if (user.id === body.id) {
      return true;
    } else
      throw new HttpException(
        `UNAUTHORIZED USER: ${user.firstname} ${user.lastname} is retrieving data for another user`,
        HttpStatus.UNAUTHORIZED,
      );
  }
}
