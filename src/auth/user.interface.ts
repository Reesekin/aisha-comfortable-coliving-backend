/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface Login {
  email: string
  password: string
}

export interface User { //Regristration data
  createdAt?: Date;
  id?: number;
  password: string;
  email: string;
  role?: string;
  bio?: string;
  accounttype?: string;
  livingStatus?: boolean
  firstname: string;
  lastname: string;
  pfp?: string;
}

export enum AccountType {
  TENANT = 'Tenant',
  HOMEOWNER = 'HomeOwner',
}

export enum Role {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
}

@Entity('AccountInfo')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  email: string
  @Column({select: false})
  password: string
  @Column({type: 'enum', enum: Role, default: Role.USER})
  role: Role
}

@Entity('Profiles')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstname: string
  @Column()
  lastname: string
  @Column({default: "No information provided"})
  bio: string
  @Column({type: 'enum', enum: AccountType, default: AccountType.TENANT})
  accounttype: AccountType
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
  @Column({default: true})
  livingStatus: boolean
  @Column({nullable: true}) //Profile picture
  pfp: string;
}

export interface Profile{
  id?: number;
  firstname: string;
  lastname: string;
  pfp?: string;
}