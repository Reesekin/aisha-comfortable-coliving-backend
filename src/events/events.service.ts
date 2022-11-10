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

  /*  //delete an event
    deleteEvent(eventID: number): Promise<DeleteResult> {
        
        //const deleteEvent = this.eventRespository.find({where:{eventID: eventID}});

       return this.eventRespository.delete(eventID);
        
    }
*/

    //search for an event 
    findEvent(eventName: string): Promise<Event> {
        return this.eventRespository.findOne({where: {eventName: eventName}});
    }

    //return all events
    async findAll(): Promise<Event[]> {
      
        return this.eventRespository.find();
    }

    
    
}
