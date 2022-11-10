import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateSideMenuInput {
  @Field()
  userId: number;

  @Field()
  profilePhoto: string;
}
