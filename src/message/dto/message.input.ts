import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MessageInput {
  @Field()
  messageId: number;

  @Field()
  senderUserId: number;

  @Field()
  recipientUserID: number;

  @Field()
  message: string;

  @Field()
  date: string;

  @Field()
  time: string;
}
