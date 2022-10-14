import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { profile } from 'console';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

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
    const { userId, email, location, occupation, ageRange } = args;
    const profile = this.profileRepository.findOne({
      where: { userId: userId },
    });

    (await profile).email = email;
    (await profile).location = location;
    (await profile).occupation = occupation;
    (await profile).ageRange = ageRange;
    return profile;
  }
}
