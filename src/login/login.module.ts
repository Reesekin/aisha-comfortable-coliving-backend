/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './login.entity';
import { LoginResolver } from './login.resolver';
import { LoginService } from './login.service';

@Module({
    imports: [TypeOrmModule.forFeature([Login])],
    providers: [LoginResolver, LoginService],
})

export class LoginModule {}