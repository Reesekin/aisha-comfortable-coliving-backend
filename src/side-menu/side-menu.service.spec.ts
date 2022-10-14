import { Test, TestingModule } from '@nestjs/testing';
import { SideMenuService } from './side-menu.service';

describe('SideMenuService', () => {
  let service: SideMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SideMenuService],
    }).compile();

    service = module.get<SideMenuService>(SideMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
