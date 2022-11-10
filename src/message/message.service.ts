import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Message } from './message.entity';
import { MessageInput } from './dto/message.input';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}

  //find all messages to/from userId
  async findAll(userId: number): Promise<Message[]> {
    return this.messageRepository.find({
      where: { senderUserId: userId, recipientUserId: userId },
    });
  }

  //add new message
  newMessage(MessageInput: MessageInput): Promise<Message> {
    const message = this.messageRepository.create(MessageInput);
    return this.messageRepository.save(message);
  }

  //remove message from userId
  async removeMessage(MessageInput: MessageInput): Promise<DeleteResult> {
    const message = this.messageRepository.findOne({ where: MessageInput });
    return this.messageRepository.delete(await message);
  }
}
