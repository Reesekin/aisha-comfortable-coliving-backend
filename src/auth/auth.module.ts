import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { ProfileEntity, UserEntity } from './user.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { RolesGuard } from './guards/roles.guard';
import { ProfileController } from 'src/profiledata/profile.controller';
import { ProfileService } from 'src/profiledata/profile.service';
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '30d' },
      }),
    }),
    TypeOrmModule.forFeature([UserEntity, ProfileEntity]),
  ],
  providers: [AuthService, ProfileService, JwtGuard, JwtStrategy, RolesGuard],
  controllers: [AuthController, ProfileController],
})
export class AuthModule {}
