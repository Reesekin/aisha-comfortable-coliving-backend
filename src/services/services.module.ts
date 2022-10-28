import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Login } from 'src/login/login.entity';

@Module({
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([Login])],
  providers: [],
  exports: [],
})
export class ServicesModule {}
