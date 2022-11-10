import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { CreateAccountInput } from './dto/create-account.input';
import { Account } from './account.entity'

@Resolver()
export class AccountResolver {

    constructor(private accountService: AccountService) {}

    @Query(returns => Account)
    getAccountByFirstName(@Args('firstName', {type: () => String}) firstName: string): Promise<Account> {

        return this.accountService.findAccountByFirstName(firstName);
    }

    @Query(returns => Account)
    getAccountByLastName(@Args('lastName', {type: () => String}) lastName: string): Promise<Account> {

        return this.accountService.findAccountByLastName(lastName);
    }

    @Query(returns => Account)
    getAccountByEmail(@Args('email', {type: () => String}) email: string): Promise<Account> {

        return this.accountService.findAccountByEmail(email);
    }

    @Mutation(returns => Account)
    createAccount(@Args('createAccountInput') createAccountInput: CreateAccountInput): Promise<Account> {

        return this.accountService.createAccount(createAccountInput);
    }


}

