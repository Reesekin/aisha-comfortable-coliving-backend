import { Injectable } from '@nestjs/common';
import { SideMenu } from './side-menu.entity';
import { SideMenuInput } from './dto/sideMenu.input';
import { UpdateSideMenuInput } from './dto/updateSideMenu.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SideMenuService {
  //no resolver logic required, side menu only displays profilePhoto and firstName, no other data is displayed
  //find profile by user id
  constructor(
    @InjectRepository(SideMenu)
    private sideMenuRepository: Repository<SideMenu>,
  ) {}

  async findByUserId(userId: number): Promise<SideMenu> {
    return this.sideMenuRepository.findOne({ where: { userId: userId } });
  }

  //update sideMenu content
  async update(
    UpdateSideMenuInput: UpdateSideMenuInput,
    SideMenu: SideMenu,
  ): Promise<SideMenu> {
    (await SideMenu).profilePhoto = UpdateSideMenuInput.profilePhoto;
    return SideMenu;
  }

  //create new profile
  newSideMenu(SideMenuInput: SideMenuInput): Promise<SideMenu> {
    const newProfile = this.sideMenuRepository.create(SideMenuInput);
    return this.sideMenuRepository.save(newProfile);
  }
}
