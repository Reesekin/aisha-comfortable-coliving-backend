/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom, from, map, Observable, switchMap } from 'rxjs';
import { LoginService } from 'src/login/login.service';
import * as bcrypt from 'bcrypt';
import { LoginInput } from 'src/login/dto/login.input';
import { JwtService } from '@nestjs/jwt';
import { RoleInput } from 'src/login/dto/role.input';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}
  validateUser(email: string, pass: string): Observable<any> {
    return this.loginService.findOneEmail(email).pipe(
      switchMap((login: any) => {
        if (login) {
          return from(bcrypt.compare(pass, login.password)).pipe(
            map((isValid: boolean) => {
              if (isValid) {
                const { password, ...result } = login;
                return result;
              }
              throw new BadRequestException();
            }),
          );
        }
      }),
    );
  }
  async login(loginInput: LoginInput) {
    const user = await firstValueFrom(
      this.loginService.findOneEmail(loginInput.email),
    );
    return {
      bearer_token: this.jwtService.sign({
        id: user.id,
        role: user.role,
        username: user.username,
        email: user.email,
      }),
      user: user,
    };
  }

  async setRole(roleInput: RoleInput) {
    const user = await firstValueFrom(
      this.loginService.findOneEmail(roleInput.email),
    );
    if (user) {
      user.role = roleInput.role;
      const saved = await firstValueFrom(this.loginService.save(user));
      console.log(saved);
      return await saved;
    }
    throw new BadRequestException();
  }
}
