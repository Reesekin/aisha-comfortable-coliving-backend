import {
  Controller,
  Get,
  UseGuards,
  Request,
  Patch,
  Body,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { from, Observable, of, switchMap } from 'rxjs';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { storePfp } from 'src/auth/helpers/imagehandler';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Get('me')
  @UseGuards(JwtGuard)
  getmyinfo(@Request() req): any {
    return from(this.profileService.getmyinfo(req.user.id));
  }
  @Patch('update')
  @UseGuards(JwtGuard)
  updateProfile(@Request() req, @Body() body): Observable<any> {
    return from(this.profileService.updateProfile(req.user.id, body));
  }
  @Post('upload')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file', storePfp))
  uploadPfp(
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ): Observable<any> {
    return from(this.profileService.uploadPfp(req.user.id, file));
  }
  @Get('image')
  @UseGuards(JwtGuard)
  findImage(@Request() req, @Res() res): Observable<any> {
    return from(this.profileService.findImage(req.user.id)).pipe(
      switchMap((image: string) => {
        if (image) {
          return of(res.sendFile(image, { root: './uploads/Pfp' }));
        } else {
          return of(res.status(404).send('File not found'));
        }
      }),
    );
  }
}
