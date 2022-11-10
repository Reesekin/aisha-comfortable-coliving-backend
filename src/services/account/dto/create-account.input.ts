import { Field, InputType, Int } from '@nestjs/graphql';
import { AccountType } from '../account.entity';

@InputType()
export class CreateAccountInput {
  @Field(() => Int)
  accountID: number;

  @Field(() => AccountType)
  accountType: AccountType;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  birthDate: string;

  @Field()
  location: string;

  @Field()
  description: string;

  @Field()
  ageRange: string;
}
