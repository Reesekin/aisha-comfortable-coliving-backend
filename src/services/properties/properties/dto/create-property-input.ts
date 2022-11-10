import { Field, InputType, Int } from "@nestjs/graphql";
import { ListingDetails } from "../../../listingDetails/listing-details/listingDetails.entity";

@InputType()
export class CreatePropertyInput {


    @Field(() => Int)
    propertyID: number;
   
    @Field()
    propertyName: string;

    @Field()
    propertyLocation: string;
    
    @Field()
    availability: string;
    
    @Field()
    price: string;


}