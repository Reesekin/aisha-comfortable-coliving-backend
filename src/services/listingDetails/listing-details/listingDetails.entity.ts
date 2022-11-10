import { Field, ObjectType, Int, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum DecisionType {

    YES = "Yes",
    NO = "No",
}

registerEnumType(DecisionType, {
    name: 'DecisionType',
    description: 'For the Yes or No questions'
})

@Entity('ListingDetails')
@ObjectType()
export class ListingDetails {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    listingID: number;

    @Column()
    @Field()
    listingTitle: string;

    @Column()
    @Field()
    listingDescription: string;
    
    @Column()
    @Field()
    listingLocation: string;
    
    @Column()
    @Field()
    listingSqFootage?: string;
    
    @Column()
    @Field(() => Int)
    bedrooms: number;

    @Column()
    @Field(() => DecisionType)
    furnished: DecisionType;

    @Column()
    @Field(() => DecisionType)
    wifi: DecisionType;

    @Column()
    @Field(() => DecisionType)
    airConditioning?: DecisionType;

    @Column()
    @Field(() => Int)
    parkingSlots: number;

    @Column()
    @Field(() => DecisionType)
    pets: DecisionType;

    @Column()
    @Field(() => DecisionType)
    smoking: DecisionType;

    @Column()
    @Field(() => Int)
    monthlyCost: number;

    @Column()
    @Field()
    dateAvailable: string;

    @Column()
    @Field(() => Int)
    numOfHousemates: number;

    @Column()
    @Field(() => DecisionType)
    homeownerLivingIn: DecisionType;



}