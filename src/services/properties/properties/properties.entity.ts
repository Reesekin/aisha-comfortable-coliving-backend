import { Field, ObjectType, Int } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Properties')
@ObjectType()
export class Properties {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    propertyID: number;

    @Column()
    @Field()
    propertyName: string;

    @Column()
    @Field()
    propertyLocation: string;
    
    @Column()
    @Field()
    availability: string;
    
    @Column()
    @Field()
    price: string;


}