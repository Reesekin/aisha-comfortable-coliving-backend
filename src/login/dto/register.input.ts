/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class RegisterInput {

  @Field()
  @Length(3, 20)
  username: string;

  @Field()
  email: string;

  @Field()
  @Length(12, 40)
  password: string;

  @Field(() => Int, {nullable: true, defaultValue: 1})
  role?: number;
}
