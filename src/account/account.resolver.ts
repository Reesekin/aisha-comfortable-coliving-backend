import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { CreateAccountInput } from './dto/create-account.input';
import { Account } from './account.entity'

@Resolver()
export class AccountResolver {

    constructor(private accountService: AccountService) {}


    @Mutation(returns => Account)
    createAccount(@Args('createAccountInput') createAccountInput: CreateAccountInput): Promise<Account> {

        return this.accountService.createAccount(createAccountInput);
    }


}

