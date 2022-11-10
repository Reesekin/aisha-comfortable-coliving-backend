import { Field, InputType, Int } from "@nestjs/graphql";
import { DecisionType } from "../listing-details/listingDetails.entity";

@InputType()
export class CreateListingInput {

    @Field(type => Int)
    listingID: number;

    @Field()
    listingTitle: string;

   // @Field() 
    //propertyInfo: [Properties];

    @Field()
    listingDescription: string;

    @Field()
    listingLocation: string;

    @Field()
    listingSqFootage?: string;

    @Field(() => Int)
    bedrooms: number;

    @Field(() => DecisionType)
    furnished: DecisionType;

    @Field(() => DecisionType)
    wifi: DecisionType;

    @Field(() => DecisionType)
    airConditioning?: DecisionType;

    @Field(() => Int)
    parkingSlots: number;

    @Field(() => DecisionType)
    pets: DecisionType;

    @Field(() => DecisionType)
    smoking: DecisionType;
    
    @Field(() => Int)
    monthlyCost: number;

    @Field()
    dateAvailable: string;

    @Field(() => Int)
    numOfHousemates: number;

    @Field(() => DecisionType)
    homeownerLivingIn: DecisionType;


}