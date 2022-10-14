import { Test, TestingModule } from '@nestjs/testing';
import { SideMenuResolver } from './side-menu.resolver';

describe('SideMenuResolver', () => {
  let resolver: SideMenuResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SideMenuResolver],
    }).compile();

    resolver = module.get<SideMenuResolver>(SideMenuResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
