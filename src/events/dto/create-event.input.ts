import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateEventInput {

    @Field(type => Int)
    eventID: number;
    @Field()
    eventName: string;
    @Field()
    eventDate: string;
    @Field()
    eventTime: string;
    @Field()
    eventLocation: string;
    @Field()
    eventDescription: string;
}