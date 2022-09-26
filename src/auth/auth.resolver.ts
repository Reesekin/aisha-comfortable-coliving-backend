import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from 'src/login/dto/login.input';
import { GqlAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginResp } from './dto/loginResp';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResp)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
}
