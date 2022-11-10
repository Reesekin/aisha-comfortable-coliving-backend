/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MeetingInfo')
@ObjectType()
export class MeetingInfo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  year: number;

  @Column()
  @Field(() => Int)
  month: number;

  @Column()
  @Field(() => Int)
  day: number;

  @Column()
  @Field(() => Int)
  hour: number;

  @Column()
  @Field(() => Int)
  minutes: number;

  @Column()
  @Field()
  UserMadeMeeting: string;

  @Column()
  @Field()
  UserJoinMeeting: string;
}
