/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { RegisterInput } from './dto/register.input';
import { Login } from './login.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login) 
    private readonly loginRepository: Repository<Login>
    ) {}
  //Hashify password function
  hashPass(pass: string): Observable<string> {
    return from(bcrypt.hash(pass, 10));
  }

  async login(login: Login): Promise<Login> {
    return login;
  }

  findAll(): Observable<Login[]> {
    return from(this.loginRepository.find());
  }

  findOneUserName(username: string): Observable<Login> {
    return from(this.loginRepository.findOne({where: {username: username}}));
  }
  findOneEmail(email: string): Observable<Login> {
    return from(this.loginRepository.findOne({where: {email: email}}));
  }
  register(login: RegisterInput): Observable<Login> {
    const {id, username, email, password} = this.loginRepository.create(login); //create new user login
    return this.hashPass(password).pipe( 
      switchMap((hash: string) => {
      return this.loginRepository.save({
        id,
        email,
        username,
        password: hash //Hashify password
      });
    }),
    ).pipe(
      map((login: Login) => {
        delete login.password; // Delete password to prevent users from seeing the hash
        return login;
      })
    )
  }
}
