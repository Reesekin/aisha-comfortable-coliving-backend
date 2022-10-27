import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Profile {
  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  dob: string;

  @Column()
  @Field()
  location: string;

  @Column()
  @Field()
  occupation: string;

  @Column()
  @Field()
  ageRange: string;
}
