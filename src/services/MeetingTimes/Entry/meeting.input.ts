/* eslint-disable prettier/prettier */
import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class MeetingInput {
    @Field(() => Int)
    id: number;

    @Field(() => Int)
    year: number;

    @Field(() => Int)
    month: number;

    @Field(() => Int)
    day: number;

    @Field(() => Int)
    hour: number;

    @Field(() => Int)
    minutes: number;

    @Field()
    UserMadeMeeting: string;

    @Field()
    UserJoinMeeting: string;
}
