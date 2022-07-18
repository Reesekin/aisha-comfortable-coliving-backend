import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../user.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const reqRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!reqRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    const check = reqRoles.some((role) => user.role?.includes(role));
    if (!check) {
      throw new HttpException(
        `UNAUTHORIZED USER: ${user.firstname} ${user.lastname} has insufficient permissions`,
        HttpStatus.UNAUTHORIZED,
      );
    }
    return true;
  }
}
