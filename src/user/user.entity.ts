/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Personality, Interests } from './dto/preferences';

@Entity('UserInfo')
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  /* 
  * AccountType should be here
  */

  @Column()
  @Field(() => String)
  firstName: string;

  @Column()
  @Field(() => String)
  lastName: string;

  @Column()
  @Field(() => Int)
  personality: [Personality];

  @Column()
  @Field(() => Int)
  interests: [Interests];

}
