/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RoleInput {
  @Field()
  email: string;

  @Field(() => Int)
  role: number;
}
