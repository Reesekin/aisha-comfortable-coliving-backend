import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './events.entity'
import { CreateEventInput } from './dto/create-event.input'

@Injectable()
export class EventsService {

    constructor(@InjectRepository(Event) private readonly eventRespository: Repository<Event>) {}

    //create an event
    createEvent(createEventInput:CreateEventInput): Promise<Event> {

        const newEvent = this.eventRespository.create(createEventInput);

        return this.eventRespository.save(newEvent);
    }

    //delete an event
    deleteEvent(eventName:string): void {
        this.eventRespository.delete(eventName);
    }

    //search for an event 
    findEvent(eventName: string): Promise<Event> {
        return this.eventRespository.findOne({where: {eventName: eventName}});
    }

    //return all events
    async findAll(): Promise<Event[]> {
      
        return this.eventRespository.find();
    }

    
    
}
