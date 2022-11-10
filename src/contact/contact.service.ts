import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { ContactInput } from './dto/Contact.input';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
  ) {}

  //find all contacts belonging to userId
  async findAll(userId: number): Promise<Contact[]> {
    return this.contactRepository.find({ where: { userId: userId } });
  }

  //create new contact
  newContact(ContactInput: ContactInput): Promise<Contact> {
    const contact = this.contactRepository.create(ContactInput);
    return this.contactRepository.save(contact);
  }

  //remove contact from userId
  async removeContact(ContactInput: ContactInput): Promise<DeleteResult> {
    const contact = this.contactRepository.findOne({ where: ContactInput });
    return this.contactRepository.delete(await contact);
  }
}
