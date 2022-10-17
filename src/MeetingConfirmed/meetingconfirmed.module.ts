/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MeetingConfirmation } from './meetingconfirmed.entity';
import { MeetingConfirmationResolver } from './meetingconfirmed.resolver';
import { MeetingConfirmationService } from './meetingconfirmed.service';

@Module({
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([MeetingConfirmation])],
    providers: [MeetingConfirmationResolver, MeetingConfirmationService],
    exports: [MeetingConfirmationService]
})

export class MeetingConfirmedModule{}