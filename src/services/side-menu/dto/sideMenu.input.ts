import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SideMenuInput {
  @Field()
  userId: number;

  @Field()
  firstName: string;

  @Field()
  profilePhoto: string;
}
