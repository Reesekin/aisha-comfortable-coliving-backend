/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom, from, map, Observable, switchMap } from 'rxjs';
import { LoginService } from 'src/login/login.service';
import * as bcrypt from 'bcrypt';
import { LoginInput } from 'src/login/dto/login.input';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}
  validateUser(email: string, pass: string): Observable<any> {
    console.log(`Running validation check on ${email}`);
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
        sub: user.id,
        username: user.username,
        email: user.email,
      }),
      user: user,
    };
  }
}
