import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Profile, ProfileEntity } from 'src/auth/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<Profile>,
  ) {}
  getmyinfo(id: number): Observable<Profile> {
    return from(this.profileRepository.findOne({ where: { id } }));
  }
  updateProfile(id: number, profile: any): Observable<Profile> {
    if (profile.id || profile.createdAt) {
      throw new HttpException(
        'ERROR: INVALID PARAMETERS',
        HttpStatus.BAD_REQUEST,
      );
    }
    return from(
      this.profileRepository.update(id, profile).then(async () => {
        return await this.profileRepository.findOne({ where: { id } });
      }),
    );
  }
  findImage(id: number): Observable<string> {
    return from(
      this.profileRepository
        .findOne({ where: { id } })
        .then(async (profile) => {
          return profile.pfp;
        }),
    );
  }
  deleteImage(id: number): void {
    this.profileRepository
      .findOne({ where: { id } })
      .then(async (profile) => {
        return profile.pfp;
      })
      .then(async (image) => {
        if (image) {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const fs = require('fs');
          if (fs.existsSync(`./uploads/Pfp/${image}`)) {
            fs.unlinkSync(`./uploads/Pfp/${image}`);
          } else {
            console.log('File not found');
          }
        }
      });
  }

  uploadPfp(id: number, file: Express.Multer.File): Observable<string> {
    this.deleteImage(id);
    return from(
      this.profileRepository
        .update(id, { pfp: file.filename })
        .then(async () => {
          return file.filename;
        }),
    );
  }
}
