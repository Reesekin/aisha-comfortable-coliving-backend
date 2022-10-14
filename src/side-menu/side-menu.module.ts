import { Module } from '@nestjs/common';
import { SideMenuService } from './side-menu.service';
import { SideMenuResolver } from './side-menu.resolver';

@Module({
  providers: [SideMenuService, SideMenuResolver],
})
export class SideMenuModule {}
