import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileInput } from './dto/profile.input';
import { UpdateProfileInput } from './dto/updateProfile.input';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  //find profile by user id
  async findByUserId(userId: number): Promise<Profile> {
    return this.profileRepository.findOne({ where: { userId: userId } });
  }

  //update profile content
  async update(
    UpdateProfileInput: UpdateProfileInput,
    Profile: Profile,
  ): Promise<Profile> {
    (await Profile).email = UpdateProfileInput.email;
    (await Profile).location = UpdateProfileInput.location;
    (await Profile).occupation = UpdateProfileInput.occupation;
    (await Profile).ageRange = UpdateProfileInput.ageRange;
    return Profile;
  }

  //create new profile
  newProfile(ProfileInput: ProfileInput): Promise<Profile> {
    const newProfile = this.profileRepository.create(ProfileInput);
    return this.profileRepository.save(newProfile);
  }
}
