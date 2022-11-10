import { Field, ObjectType, registerEnumType, Int } from '@nestjs/graphql'
import { Column, Entity, PrimaryColumn } from 'typeorm';


export enum AccountType {

    TENANT = "Tenant",
    HOMEOWNER = "Homeowner",
    PROPERTYOWNER = "Property Owner",
}

registerEnumType(AccountType, {
    name: 'AccountType',
    description: 'The three account types the user can create.'
})

@Entity('Account')
@ObjectType()
export class Account {

    @PrimaryColumn()
    @Field(type => Int)
    accountID: number;

    @Column()
    @Field(() => AccountType)
    accountType: AccountType;

    @Column()
    @Field()
    firstName: string;

    @Column()
    @Field()
    lastName: string;

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