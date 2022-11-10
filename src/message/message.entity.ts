import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Message {
  @PrimaryColumn()
  @Field(() => Int)
  messageId: number;

  @Column()
  @Field(() => Int)
  senderUserId: number;

  @Column()
  @Field(() => Int)
  recipientUserId: number;

  @Column()
  @Field()
  message: string;

  @Column()
  @Field()
  date: string;

  @Column()
  @Field()
  time: string;
}
