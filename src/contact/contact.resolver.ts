import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';
import { ContactInput } from './dto/Contact.input';

@Resolver(() => Contact)
export class ContactResolver {
  constructor(private contactService: ContactService) {}

  //return all contacts
  @Query(() => [Contact])
  contacts(userId: number): Promise<Contact[]> {
    return this.contactService.findAll(userId);
  }

  //add contact
  @Mutation(() => Contact)
  async createContact(
    @Args('ContactInput') ContactInput: ContactInput,
  ): Promise<Contact> {
    return this.contactService.newContact(ContactInput);
  }

  //delete contact
  @Mutation(() => Contact)
  async deleteContact(
    @Args('ContactInput') ContactInput: ContactInput,
  ): Promise<DeleteResult> {
    const deleteResult = this.contactService.removeContact(ContactInput);
    return deleteResult;
  }
}
