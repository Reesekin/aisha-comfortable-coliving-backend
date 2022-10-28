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

  findAll(): Observable<Login[] | undefined> {
    return from(this.loginRepository.find());
  }

  save(login: Login): Observable<Login | undefined> {
    return from(this.loginRepository.save(login));
  }

  findOneUserName(username: string): Observable<Login | undefined> {
    return from(this.loginRepository.findOne({where: {username: username}}));
  }
  findOneEmail(email: string): Observable<Login | undefined> {
    return from(this.loginRepository.findOne({where: {email: email}}));
  }
  register(login: RegisterInput): Observable<Login | undefined> {
    const {id, username, email, password, role} = this.loginRepository.create(login); //create new user login
    return this.hashPass(password).pipe( 
      switchMap((hash: string) => {
      return this.loginRepository.save({
        id,
        email,
        username,
        role,
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
