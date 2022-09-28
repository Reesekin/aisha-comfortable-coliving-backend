import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from 'src/login/dto/login.input';
import { Login } from 'src/login/login.entity';
import { GqlAuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { LoginResp } from './dto/loginResp';
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Login, { nullable: true })
  compare(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.validateUser(loginInput.email, loginInput.password);
  }

  @Mutation(() => LoginResp, { nullable: true })
  @UseGuards(GqlAuthGuard)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
}
