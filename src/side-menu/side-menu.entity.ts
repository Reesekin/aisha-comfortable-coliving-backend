import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class SideMenu {
  @PrimaryColumn()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  profilePhoto: string;
}
