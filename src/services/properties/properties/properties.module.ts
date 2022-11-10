import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PropertiesResolver } from './properties.resolver';
import { PropertiesService } from './properties.service';
import { Properties } from './properties.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Properties])],
    providers: [PropertiesService, PropertiesResolver]
})
export class PropertiesModule {}
