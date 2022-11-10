import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Login } from 'src/login/login.entity';
import { AccountModule } from './account/account.module';
import { EventsModule } from './events/events.module';
import { MeetingModule } from './MeetingTimes/meeting.module';
import { SideMenuModule } from './side-menu/side-menu.module';
import { ListingDetailsModule } from './listingDetails/listing-details/listing-details.module';
import { PropertiesModule } from './properties/properties/properties.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Login]),
    MeetingModule,
    AccountModule,
    EventsModule,
    SideMenuModule,
    ListingDetailsModule,
    PropertiesModule

  ],
  providers: [],
  exports: [],
})
export class ServicesModule {}
