import { Module } from '@nestjs/common';
import { SideMenuService } from './side-menu.service';
import { SideMenuResolver } from './side-menu.resolver';
import { SideMenu } from './side-menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SideMenu])],
  providers: [SideMenuService, SideMenuResolver],
})
export class SideMenuModule {}
