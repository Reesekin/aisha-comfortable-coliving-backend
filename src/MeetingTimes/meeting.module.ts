/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MeetingInfo } from './meeting.entity';
import { MeetingInfoResolver } from './meeting.resolver';
import { MeetingService } from './meeting.service';

@Module({
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([MeetingInfo])],
    providers: [MeetingInfoResolver, MeetingService],
    exports: [MeetingService]
})

export class MeetingInfoModule{}