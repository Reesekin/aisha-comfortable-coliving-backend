/* eslint-disable prettier/prettier */
import { env } from 'process';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { MeetingModule } from './MeetingTimes/meeting.module';
import { MeetingInfo} from './MeetingTimes/meeting.entity';
import { Type } from 'class-transformer';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schemas/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.POSTGRES_HOST,
      port: parseInt(env.POSTGRES_PORT),
      username: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    TypeOrmModule.forFeature([MeetingModule]),
    MeetingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
