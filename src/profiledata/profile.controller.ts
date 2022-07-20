import {
  Controller,
  Get,
  UseGuards,
  Request,
  Patch,
  Body,
} from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
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
}
