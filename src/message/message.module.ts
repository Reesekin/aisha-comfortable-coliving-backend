import { Module } from '@nestjs/common';
import { MessagesService } from './message.service';
import { MessagesResolver } from './message.resolver';

@Module({
  providers: [MessagesService, MessagesResolver]
})
export class MessagesModule {}
