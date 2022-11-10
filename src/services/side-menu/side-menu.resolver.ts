import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SideMenu } from './side-menu.entity';
import { SideMenuInput } from './dto/sideMenu.input';
import { UpdateSideMenuInput } from './dto/updateSideMenu.input';
import { SideMenuService } from './side-menu.service';

@Resolver()
export class SideMenuResolver {
  constructor(private sideMenuService: SideMenuService) {}

  //update existing side menu
  @Mutation(() => SideMenu)
  async updateSideMenu(
    @Args('UpdateSideMenuInput') UpdateSideMenuInput: UpdateSideMenuInput,
  ): Promise<SideMenu> {
    const sideMenu = this.sideMenuService.findByUserId(
      UpdateSideMenuInput.userId,
    );
    return this.sideMenuService.update(UpdateSideMenuInput, await sideMenu);
  }

  //create new side menu
  @Mutation(() => SideMenu)
  async createSideMenu(
    @Args('SideMenuInput') SideMenuInput: SideMenuInput,
  ): Promise<SideMenu> {
    const sideMenu = this.sideMenuService.newSideMenu(SideMenuInput);
    return sideMenu;
  }
}
