import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileInput } from './dto/profile.input';
import { UpdateProfileInput } from './dto/updateProfile.input';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Resolver((of) => Profile)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  //update existing profile
  @Mutation(() => Profile)
  async updateProfile(
    @Args('UpdateProfileInput') UpdateProfileInput: UpdateProfileInput,
  ): Promise<Profile> {
    const profile = this.profileService.findByUserId(UpdateProfileInput.userId);
    return this.profileService.update(UpdateProfileInput, await profile);
  }

  //create new profile
  @Mutation(() => Profile)
  async createProfile(
    @Args('ProfileInput') ProfileInput: ProfileInput,
  ): Promise<Profile> {
    const profile = this.profileService.newProfile(ProfileInput);
    return profile;
  }
}
