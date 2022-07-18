/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Login {
  email: string
  password: string
}

export interface User {
  createdAt?: Date;
  id?: number;
  username: string;
  password: string;
  email: string;
  role?: string;
  firstname: string;
  lastname: string;
}

export enum Role {
  USER = 'USER',
  TENANT = 'TENANT',
  HOMEOWNER = 'HOMEOWNER',
  ADMIN = 'ADMIN',
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  email: string
  @Column({select: false})
  password: string
  @Column()
  firstname: string
  @Column()
  lastname: string
  @Column({type: 'enum', enum: Role, default: Role.USER})
  role: Role
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}