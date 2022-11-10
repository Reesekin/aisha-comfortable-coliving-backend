import { Test, TestingModule } from '@nestjs/testing';
import { ListingDetailsResolver } from './listing-details.resolver';

describe('ListingDetailsResolver', () => {
  let resolver: ListingDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingDetailsResolver],
    }).compile();

    resolver = module.get<ListingDetailsResolver>(ListingDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
