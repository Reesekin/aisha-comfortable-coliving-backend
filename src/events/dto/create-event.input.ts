import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateEventInput {

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