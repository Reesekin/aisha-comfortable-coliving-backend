import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListingInput } from '../dto/create-listing-input';
import { ListingDetails } from './listingDetails.entity';

@Injectable()
export class ListingDetailsService {

constructor(@InjectRepository(ListingDetails) private readonly listingDetailsRepository: Repository<ListingDetails>) {}

//create a listing
createListing(createListingInput:CreateListingInput): Promise<ListingDetails> {

    const newListing = this.listingDetailsRepository.create(createListingInput);

    return this.listingDetailsRepository.save(newListing);
}

//update a listing
async updateListing (updateListing: CreateListingInput, listingDetails: ListingDetails): Promise<ListingDetails> {

    (await listingDetails).listingTitle = updateListing.listingTitle;
    (await listingDetails).listingDescription = updateListing.listingDescription;
    (await listingDetails).listingLocation = updateListing.listingLocation;
    (await listingDetails).listingSqFootage = updateListing.listingSqFootage;
    (await listingDetails).bedrooms = updateListing.bedrooms;
    (await listingDetails).furnished = updateListing.furnished;
    (await listingDetails).wifi = updateListing.wifi;
    (await listingDetails).airConditioning = updateListing.airConditioning;
    (await listingDetails).parkingSlots = updateListing.parkingSlots;
    (await listingDetails).pets = updateListing.pets;
    (await listingDetails).smoking = updateListing.smoking;
    (await listingDetails).monthlyCost = updateListing.monthlyCost;
    (await listingDetails).dateAvailable = updateListing.dateAvailable;
    (await listingDetails).numOfHousemates = updateListing.numOfHousemates;
    (await listingDetails).homeownerLivingIn = updateListing.homeownerLivingIn;

    return this.listingDetailsRepository.save(listingDetails);
}

findListingByID(listingID: number): Promise<ListingDetails> {

    return this.listingDetailsRepository.findOne({where: {listingID:listingID}});
}
//search for a single listing
findListing(listingName: string): Promise<ListingDetails> {

    return this.listingDetailsRepository.findOne({where: {listingTitle:listingName}});
}

//return all listings
async findAll (): Promise<ListingDetails[]> {

    return this.listingDetailsRepository.find();
}
}
