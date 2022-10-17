/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('LoginInfo')
@ObjectType()
export class MeetingConfirmation {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({unique: true})
  @Field(() => Int)
  year: number;

  @Column({unique: true})
  @Field(() => Int)
  month: number;

  @Column({unique: true})
  @Field(() => Int)
  day: number;

  @Column({unique: true})
  @Field(() => Int)
  hour: number;

  @Column({unique: true})
  @Field(() => Int)
  minutes: number;
}
