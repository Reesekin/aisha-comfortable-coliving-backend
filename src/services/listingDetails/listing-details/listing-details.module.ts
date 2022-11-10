import { Module } from '@nestjs/common';
import { ListingDetailsService } from './listing-details.service';
import { ListingDetailsResolver } from './listing-details.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingDetails } from './listingDetails.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListingDetails])],
  providers: [ListingDetailsService, ListingDetailsResolver]
})
export class ListingDetailsModule {}
