/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Login } from 'src/login/login.entity';

@ObjectType()
export class LoginResp {
  @Field()
  bearer_token: string;

  @Field(() => Login)
  user: Login;
}
