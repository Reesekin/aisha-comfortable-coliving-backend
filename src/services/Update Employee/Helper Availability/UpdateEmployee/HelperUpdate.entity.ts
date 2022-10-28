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
    @Field()
    name: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    Availability: string;

    @Column()
    @Field()
    Unavailable: string;
}
