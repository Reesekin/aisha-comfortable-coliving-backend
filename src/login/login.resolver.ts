/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { from, Observable } from 'rxjs';
import { RegisterInput } from './dto/register.input';
import { Login } from './login.entity';
import { LoginService } from './login.service';

@Resolver(of => Login)
export class LoginResolver {
    constructor(private loginService: LoginService) {}
    
    // View login info : ADMIN & DEBUGGING PURPOSES ONLY
    @Query(returns => [Login])
    viewLogins(): Observable<Login[]> {
        return from(this.loginService.findAll());
    }

    //Find account by email
    @Query(returns => Login)
    findEmail(
        @Args('email')
        email: string
        ) : Observable<Login> {
        return this.loginService.findOneEmail(email);
    }

    //Create login
    @Mutation(returns => Login)
    createLogin(
        @Args('registerInput')
        login: RegisterInput
        ) : Observable<Login> {
        return this.loginService.register(login);
    }
}