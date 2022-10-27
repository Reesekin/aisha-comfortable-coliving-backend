import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProfileInput {
  @Field()
  userId: number;

  @Field()
  email: string;

  @Field()
  location: string;

  @Field()
  occupation: string;

  @Field()
  ageRange: string;
}
