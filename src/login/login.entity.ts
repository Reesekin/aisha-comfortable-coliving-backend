/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('LoginInfo')
@ObjectType()
export class Login {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int, {nullable: true})
  role?: number;

  @Column({unique: true})
  @Field()
  username: string;

  @Column({unique: true})
  @Field()
  email: string;

  @Column()
  @Field({nullable: true})
  password: string;

  // @Column({nullable: true})
  // @Field({nullable: true})
  // @OneToOne(() => User, {
  //   onDelete: 'CASCADE',
  // })
  // private user?: User;
}
