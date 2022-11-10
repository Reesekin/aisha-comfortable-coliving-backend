import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Event } from './events.entity'
import { CreateEventInput } from './dto/create-event.input'
import { Observable, from } from 'rxjs';
import { ProvidePlugin } from 'webpack';
import { DeleteEventInput } from './dto/delete-event.input';

@Injectable()
export class EventsService {

    constructor(@InjectRepository(Event) private readonly eventRespository: Repository<Event>) {}

    //create an event
     createEvent(createEventInput:CreateEventInput): Promise<Event> {

        const newEvent = this.eventRespository.create(createEventInput);

        return this.eventRespository.save(newEvent);
    }

    findEventByID(eventID: number):Promise<Event> {
        return this.eventRespository.findOne({where: {eventID: eventID}});
    }
    //search for an event 
    findEvent(eventName: string): Promise<Event> {
        return this.eventRespository.findOne({where: {eventName: eventName}});
    }

    async updateEvent (updateEvent:CreateEventInput, event:Event): Promise<Event> {

        (await event).eventName = updateEvent.eventName;
        (await event).eventDate = updateEvent.eventDate;
        (await event).eventTime = updateEvent.eventTime;
        (await event).eventLocation = updateEvent.eventLocation;
        (await event).eventDescription = updateEvent.eventDescription;

        return this.eventRespository.save(event);
    }

    //return all events
    async findAll(): Promise<Event[]> {
      
        return this.eventRespository.find();
    }

    
    
}
