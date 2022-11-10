import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity'
import { CreateAccountInput } from './dto/create-account.input';

@Injectable()
export class AccountService {


    constructor(@InjectRepository(Account) private readonly accountRepository: Repository<Account>) {}

    //createAccount
    createAccount(createAccountInput:CreateAccountInput): Promise<Account> {

        const newAccount = this.accountRepository.create(createAccountInput);

        return this.accountRepository.save(newAccount);
    }

    findAccountByFirstName(firstName: string): Promise<Account>
    {
        return this.accountRepository.findOne({where: {firstName: firstName}});
    }

    findAccountByLastName(lastName: string): Promise<Account>
    {
        return this.accountRepository.findOne({where: {lastName: lastName}});
    }

    findAccountByEmail(email: string): Promise<Account>
    {
        return this.accountRepository.findOne({where: {email: email}});
    }
}
