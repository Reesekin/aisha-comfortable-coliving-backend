import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyInput } from './dto/create-property-input';
import { Properties } from './properties.entity'

@Injectable()
export class PropertiesService {

    constructor(@InjectRepository(Properties) private readonly propertiesRespository: Repository<Properties>) {}

    
    //create Property card
    createProperty(createPropertyInput:CreatePropertyInput):Promise<Properties> {

        const newProperty = this.propertiesRespository.create(createPropertyInput);

        return this.propertiesRespository.save(newProperty);
    }

    findPropertyByID(propertyID: number): Promise<Properties> {

        return this.propertiesRespository.findOne({where: {propertyID:propertyID}});
    }

    //find a property
    findProperty(propertyName: string): Promise<Properties> {
        return this.propertiesRespository.findOne({where: {propertyName: propertyName}});

    }

    async updateProperty (updateProperty:CreatePropertyInput, property: Properties): Promise<Properties> {

        (await property).propertyName = updateProperty.propertyName;
        (await property).propertyLocation = updateProperty.propertyLocation;
        (await property).availability = updateProperty.availability;
        (await property).price = updateProperty.price;

        return this.propertiesRespository.save(property);
    }
    //return all properties
    async findAll(): Promise<Properties[]> {

        return this.propertiesRespository.find();
    }
}
    


