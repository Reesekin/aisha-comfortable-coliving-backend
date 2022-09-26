import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { LoginModule } from 'src/login/login.module';

@Module({
  imports: [PassportModule, LoginModule],
  providers: [AuthService, AuthResolver, LocalStrategy],
})
export class AuthModule {}
