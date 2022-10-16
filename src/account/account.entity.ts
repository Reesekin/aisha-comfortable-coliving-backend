import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, PrimaryColumn } from 'typeorm';


export enum AccountType {

    TENANT,
    HOMEOWNER,
    PROPERTYOWNER,
}

registerEnumType(AccountType, {
    name: 'AccountType',
    description: 'The three account types the user can create.'
})

@Entity('Account')
@ObjectType()
export class Account {

    @PrimaryColumn()
    @Field(type => AccountType)
    accountType: AccountType;

    @Column()
    @Field()
    firstName: string;

    @Column()
    @Field()
    lastname: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    birthDate: string;

    @Column()
    @Field()
    location: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    ageRange: string;
    
}