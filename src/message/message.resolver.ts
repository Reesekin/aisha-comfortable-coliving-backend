import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Message } from './message.entity';
import { MessageService } from './message.service';
import { MessageInput } from './dto/message.input';
import { DeleteResult } from 'typeorm';

@Resolver((of) => Message)
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  //send message
  @Mutation(() => Message)
  async sendMessage(
    @Args('MessageInput') MessageInput: MessageInput,
  ): Promise<Message> {
    return this.messageService.newMessage(MessageInput);
  }

  //delete message
  @Mutation(() => Message)
  async deleteMessage(
    @Args('MessageInput') MessageInput: MessageInput,
  ): Promise<DeleteResult> {
    const deleteResult = this.messageService.removeMessage(MessageInput);
    return deleteResult;
  }

  //return all messages (should it be a subscription??)
  @Query(() => [Message])
  allMessages(userId: number): Promise<Message[]> {
    return this.messageService.findAll(userId);
  }
}
