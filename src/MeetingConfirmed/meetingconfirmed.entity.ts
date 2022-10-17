/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MeetingInfo } from 'src/MeetingTimes/meeting.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MeetingInfo')
@ObjectType()
export class MeetingConfirmation {
    @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

    @Column({unique: true})
    @Field()
    MeetingTime: MeetingInfo;


  @Column({unique: true})
  @Field()
  UserMadeMeeting: string;

  @Column()
  @Field()
  UserJoinMeeting: string;

}
