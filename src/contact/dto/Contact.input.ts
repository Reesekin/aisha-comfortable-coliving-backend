import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContactInput {
  @Field()
  userId: number;

  @Field()
  contactUserID: number;
}
