/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { Login, UserEntity } from './user.interface';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  hashPass(pass: string): Observable<string> {
    return from(bcrypt.hash(pass, 10));
  }
  registerUser(user: User, req : any): Observable<User> {//user regristration
    console.log(req);
    const { email, password, firstname, lastname, role } = user;
    return this.hashPass(password).pipe(
      switchMap((hash: string) => {
        return this.userRepository.save({
          email,
          password: hash,
          firstname,
          lastname,
          role,
        });
      }),
    ).pipe(
      map((user: User) => {
        delete user.password;
        return user;
      }),
    )
  }
  validateCreds(login: Login): Observable<User> {
    return from(this.userRepository.findOne({
      where: { email: login.email }, select: ['id', 'email', 'password', 'firstname', 'lastname', 'role'],
    })).pipe(
      switchMap((user: User) => {
        if (!user) throw new HttpException('ERROR: USER NOT FOUND!', HttpStatus.BAD_REQUEST);
          return from(bcrypt.compare(login.password, user.password)).pipe(
            map((isValid: boolean) => {
              if (isValid) {
                delete user.password;
                return user;
              }
              else throw new HttpException('ERROR: PASSWORD DOES NOT MATCH!', HttpStatus.BAD_REQUEST);
            })
          )}
      ))

  }
  login(login: Login): Observable<string> {
    return this.validateCreds(login).pipe(
      switchMap((user: User) => {
        if(user){
          return from(this.jwtService.signAsync({user}));
        }
      }),
    );
  }
  getUsers(): Observable<User[]> {
    return from(this.userRepository.find());
  }
}
