import { Args, Resolver, Query, Mutation} from '@nestjs/graphql';
import { CreateListingInput } from '../dto/create-listing-input';
import { ListingDetails } from './listingDetails.entity';
import { ListingDetailsService } from './listing-details.service';

@Resolver(of => ListingDetails)
export class ListingDetailsResolver {

constructor(private listingDetailsService: ListingDetailsService) {}

@Query(returns => ListingDetails)
getListing(@Args('listingName', {type: () => String}) listingName: string): Promise<ListingDetails> {

    return this.listingDetailsService.findListing(listingName);
}

@Query(returns => [ListingDetails])
listings(): Promise<ListingDetails[]> {

    return this.listingDetailsService.findAll();
}

@Mutation(returns => ListingDetails)
createListing(@Args('createListingInput') createListingInput:CreateListingInput): Promise<ListingDetails> {

    return this.listingDetailsService.createListing(createListingInput);
}

@Mutation(returns => ListingDetails)
async updateListing(@Args ('updateListing') updateListing:CreateListingInput,): Promise<ListingDetails> {

    const listing = this.listingDetailsService.findListingByID(updateListing.listingID);
    return this.listingDetailsService.updateListing(updateListing, await listing);
}

}
