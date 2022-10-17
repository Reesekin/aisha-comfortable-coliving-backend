/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { from, Observable } from 'rxjs';
import { ExistsGuard } from 'src/auth/guards/exists.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MeetingConfirmationService } from './meetingconfirmed.service';
import { MeetingConfirmation } from './meetingconfirmed.entity';
import { MeetingConfirmationInput } from './meetingconfirmedInput/meetingconfirmed.input';

@Resolver(of => MeetingConfirmation)
export class MeetingConfirmationResolver {
    constructor(private meetingservice: MeetingConfirmationService) {}
    
    // View all meetings of all users: ADMIN & DEBUGGING PURPOSES ONLY
    @UseGuards(JwtAuthGuard)
    @Query(returns => [MeetingConfirmation], { nullable: true })
    viewLogins(): Observable<MeetingConfirmation[]> {
        return from(this.meetingservice.findAll());
    }

    @Query(returns => MeetingConfirmation, {nullable: true})
    findOneId(
        @Args('id')
        id: number
        ) : Observable<MeetingConfirmation> {
        return this.meetingservice.findOne(id);
    }

    //Find meeting by month
    @Query(returns => MeetingConfirmation, {nullable: true})
    findUserMadeMeeting(
        @Args('UserMadeMeeting')
        UserMadeMeeting: string
        ) : Observable<MeetingConfirmation> {
        return this.meetingservice.findOneMade(UserMadeMeeting);
    }

    @Query(returns => MeetingConfirmation, {nullable: true})
    findUserJoinMeeting(
        @Args('UserJoinMeeting')
        UserJoinMeeting: string
        ) : Observable<MeetingConfirmation> {
        return this.meetingservice.findOneJoin(UserJoinMeeting);
    }

    //Creates MeetingInfo
    @Mutation(returns => MeetingConfirmation)
    @UseGuards(ExistsGuard)
    createMeetingConfirmation(
        @Args('meetingconfirmedInput')
        meetingconfirmed: MeetingConfirmationInput
        ) : Observable<MeetingConfirmation> {
        return this.meetingservice.createMeetingConfirmation(meetingconfirmed);
    }
}