/* eslint-disable prettier/prettier */
import { Body, Request, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { Role, User } from './user.interface';
import { AuthService } from './auth.service';
import { Login } from './user.interface';
import { JwtGuard } from './guards/jwt.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("register")
  registerUser(@Body() user: User): Observable<User> {
    return from(this.authService.registerUser(user));
  }
  @Roles(Role.ADMIN)
  @UseGuards(JwtGuard, RolesGuard)
  @Get("fetch")
    getUsers(): Observable<User[]> {
      return from(this.authService.getUsers());
    }
  @Post("login")
  login(@Body() login: Login): Observable<{token : string}> {
    return this.authService
      .login(login)
      .pipe(map((jwt: string) => ({token: jwt})));
  }
}
