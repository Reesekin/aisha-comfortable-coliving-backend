import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Resolver((of) => Profile)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  @Mutation((returns) => Profile)
  async updateProfile(
    @Args()
    args: {
      userId: number;
      email: string;
      location: string;
      occupation: string;
      ageRange: string;
    },
  ): Promise<Profile> {
    return this.profileService.updateProfile(args);
  }
}
