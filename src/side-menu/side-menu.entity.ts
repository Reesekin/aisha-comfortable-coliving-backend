import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class SideMenu {
  @Column()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  profilePhoto: string;
}
