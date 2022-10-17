/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MeetingInput {
    @Field()
    id: number;

    @Field()
    year: number;

    @Field()
    month: number;

    @Field()
    day: number;

    @Field()
    hour: number;

    @Field()
    minutes: number;
}
