/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, switchMap} from 'rxjs';
import { Repository } from 'typeorm';
import { MeetingConfirmation } from './meetingconfirmed.entity';
import { MeetingConfirmationInput } from './meetingconfirmedInput/meetingconfirmed.input';

@Injectable()
export class MeetingConfirmationService{
    constructor(
        @InjectRepository(MeetingConfirmation)
        private readonly meetingConfirmationRepository: Repository<MeetingConfirmation>
    ) {}

    findAll(): Observable<MeetingConfirmation[] | undefined> {
        return from(this.meetingConfirmationRepository.find());
    }

    findOne(id: number): Observable<MeetingConfirmation | undefined> {
        return from(this.meetingConfirmationRepository.findOne({where: {id: id}}));
    }

    findOneJoin(name: string): Observable<MeetingConfirmation | undefined> {
        return from(this.meetingConfirmationRepository.findOne({where: {UserJoinMeeting: name}}));
    }

    findOneMade(name: string): Observable<MeetingConfirmation | undefined> {
        return from(this.meetingConfirmationRepository.findOne({where: {UserMadeMeeting: name}}));
    }

    createMeetingConfirmation(meeting: MeetingConfirmationInput): Observable<MeetingConfirmationInput | undefined> {
        const {id, MeetingTime, UserJoinMeeting, UserMadeMeeting} = this.meetingConfirmationRepository.create(meeting);
        switchMap((hash: string) => 
        {
            return this.meetingConfirmationRepository.save({
            id,
            MeetingTime,
            UserJoinMeeting,
            UserMadeMeeting,
            });
    })
    return
}

   /* updateMeeting(meeting: MeetingInfo): Observable<MeetingInfo | undefined> {
        return from(this.meetingRepository.update(meeting));
    }*/
}