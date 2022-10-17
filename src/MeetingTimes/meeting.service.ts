/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, switchMap} from 'rxjs';
import { Repository } from 'typeorm';
import { MeetingInput } from './Entry/meeting.input';
import { MeetingInfo } from './meeting.entity';

@Injectable()
export class MeetingService{
    constructor(
        @InjectRepository(MeetingInfo)
        private readonly meetingRepository: Repository<MeetingInfo>
    ) {}

    findAll(): Observable<MeetingInfo[] | undefined> {
        return from(this.meetingRepository.find());
    }

    findOne(id: number): Observable<MeetingInfo | undefined> {
        return from(this.meetingRepository.findOne({where: {id: id}}));
    }

    findyear(year: number): Observable<MeetingInfo | undefined> {
        return from(this.meetingRepository.findOne({where: {year: year}}));
    }

    findmonth(month: number): Observable<MeetingInfo | undefined> {
        return from(this.meetingRepository.findOne({where: {month: month}}));
    }

    findday(day: number): Observable<MeetingInfo | undefined> {
        return from(this.meetingRepository.findOne({where: {day: day}}));
    }

    createMeeting(meeting: MeetingInput): Observable<MeetingInput | undefined> {
        const {id, year, month, day, hour, minutes} = this.meetingRepository.create(meeting);
        switchMap((hash: string) => 
        {
            return this.meetingRepository.save({
            id,
            year,
            month,
            day,
            hour,
            minutes,
            });
    })
    return
}

   /* updateMeeting(meeting: MeetingInfo): Observable<MeetingInfo | undefined> {
        return from(this.meetingRepository.update(meeting));
    }*/
}