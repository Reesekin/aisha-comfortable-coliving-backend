/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { isAlpha, isAlphanumeric, isEmail } from 'class-validator';

@InputType()
export class RegisterInput {

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
