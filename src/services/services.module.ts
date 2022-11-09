import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Login } from 'src/login/login.entity';
import { MeetingModule } from './MeetingTimes/meeting.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Login]),
    MeetingModule,
  ],
  providers: [],
  exports: [],
})
export class ServicesModule {}
