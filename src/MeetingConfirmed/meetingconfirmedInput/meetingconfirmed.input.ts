/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { MeetingInfo } from 'src/MeetingTimes/meeting.entity';

@InputType()
export class MeetingConfirmationInput {
    @Field()
    id: number;

    @Field()
    MeetingTime: MeetingInfo;

    @Field()
    UserMadeMeeting: string;

    @Field()
    UserJoinMeeting: string;
}
