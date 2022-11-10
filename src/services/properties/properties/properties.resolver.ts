import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { argsToArgsConfig } from 'graphql/type/definition';
import { CreatePropertyInput } from './dto/create-property-input';
import { Properties } from './properties.entity';
import { PropertiesService } from './properties.service';

@Resolver(of => Properties)
export class PropertiesResolver {

    constructor(private propertiesService:PropertiesService) {} 

    @Query(returns => Properties)
    getProperty(@Args('propertiesName', {type: () => String}) propertyName: string): Promise<Properties>{

        return this.propertiesService.findProperty(propertyName);
    }

    @Query(returns => [Properties])
    properties(): Promise<Properties[]> {

        return this.propertiesService.findAll();
    }

    @Mutation(returns => Properties)
    createProperty(@Args('createPropertyInput') createPropertyInput:CreatePropertyInput): Promise<Properties> {

        return this.propertiesService.createProperty(createPropertyInput);
    }

    @Mutation(returns => Properties)
    async updateProperty(@Args('updateProperty') updateProertyInput:CreatePropertyInput): Promise<Properties> {

        const property = this.propertiesService.findPropertyByID(updateProertyInput.propertyID);
        return this.propertiesService.updateProperty(updateProertyInput, await property)
    }
}
