/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { from, map, Observable, switchMap } from 'rxjs';
import { LoginService } from 'src/login/login.service';
import * as bcrypt from 'bcrypt';
import { LoginInput } from 'src/login/dto/login.input';

@Injectable()
export class AuthService {
  constructor(private loginService: LoginService) {}
  validateUser(email: string, pass: string): Observable<any> {
    this.loginService.findOneEmail(email).pipe(
      switchMap((login: any) => {
        if (login) {
          return from(bcrypt.compare(pass, login.password)).pipe(
            map((isValid: boolean) => {
              if (isValid) {
                const { password, ...result } = login;
                return result;
              }
              return null;
            }),
          );
        }
      }),
    );
    return null;
  }
  login(loginInput: LoginInput) {
    return this.loginService.findOneEmail(loginInput.email).pipe(
      switchMap((login: any): any => {
        const obj = new Object();
        obj['user'] = login;
        obj['token'] = 'token';
        return obj;
      }),
    );
  }
}
