/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { from, Observable } from 'rxjs';
import { ExistsGuard } from 'src/auth/guards/exists.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RegisterInput } from './dto/register.input';
import { Login } from './login.entity';
import { LoginService } from './login.service';

@Resolver(of => Login)
export class LoginResolver {
    constructor(private loginService: LoginService) {}
    
    // View login info : ADMIN & DEBUGGING PURPOSES ONLY
    @UseGuards(JwtAuthGuard)
    @Query(returns => [Login], { nullable: true })
    viewLogins(): Observable<Login[]> {
        return from(this.loginService.findAll());
    }

    //Find account by email
    @Query(returns => Login, {nullable: true})
    findEmail(
        @Args('email')
        email: string
        ) : Observable<Login> {
        return this.loginService.findOneEmail(email);
    }

    //Create login
    @Mutation(returns => Login)
    @UseGuards(ExistsGuard)
    createLogin(
        @Args('registerInput')
        login: RegisterInput
        ) : Observable<Login> {
        return this.loginService.register(login);
    }
}