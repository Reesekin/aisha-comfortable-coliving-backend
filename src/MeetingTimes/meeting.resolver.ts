/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { from, Observable } from 'rxjs';
import { ExistsGuard } from 'src/auth/guards/exists.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MeetingService } from './meeting.service';
import { MeetingInfo } from './meeting.entity';
import { MeetingInput } from './Entry/meeting.input';

@Resolver(of => MeetingInfo)
export class MeetingInfoResolver {
    constructor(private meetingservice: MeetingService) {}
    
    // View all meetings of all users: ADMIN & DEBUGGING PURPOSES ONLY
    @UseGuards(JwtAuthGuard)
    @Query(returns => [MeetingInfo], { nullable: true })
    viewLogins(): Observable<MeetingInfo[]> {
        return from(this.meetingservice.findAll());
    }

    //Find meeting by month
    @Query(returns => MeetingInfo, {nullable: true})
    findMonth(
        @Args('month')
        month: number
        ) : Observable<MeetingInfo> {
        return this.meetingservice.findmonth(month);
    }

    //Creates MeetingInfo
    @Mutation(returns => MeetingInfo)
    @UseGuards(ExistsGuard)
    createMeeting(
        @Args('meetingInput')
        meeting: MeetingInput
        ) : Observable<MeetingInfo> {
        return this.meetingservice.createMeeting(meeting);
    }
}