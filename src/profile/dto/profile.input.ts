import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileInput {
  @Field()
  userId: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  dob?: string;

  @Field()
  location: string;

  @Field()
  occupation: string;

  @Field()
  ageRange: string;
}
