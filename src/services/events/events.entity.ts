import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Event {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  eventID: number;

  @Column()
  @Field()
  eventName: string;

  @Column()
  @Field()
  eventDate: string;

  @Column()
  @Field()
  eventTime: string;

  @Column()
  @Field()
  eventLocation: string;

  @Column()
  @Field()
  eventDescription: string;
}
