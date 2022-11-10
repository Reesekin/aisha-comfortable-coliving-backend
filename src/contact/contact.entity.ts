import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Contact {
  @PrimaryColumn()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field(() => Int)
  contactUserId: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  profilePhoto: string;

  @Column()
  @Field()
  accountType: string;
}
