import { Type } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { DeleteEventInput } from './dto/delete-event.input';
import { Event } from './events.entity'
import { EventsService } from './events.service';

@Resolver(of => Event)
export class EventsResolver {

    constructor(private eventsService:EventsService) {}

    @Query(returns => Event)
    getEvent(@Args('eventName', {type: () => String}) eventName: string): Promise<Event> {

        return this.eventsService.findEvent(eventName);
    }
    @Query(returns => [Event])
    events(): Promise<Event[]> {

        return this.eventsService.findAll();
    }
   
    /*
    @Mutation(returns => Boolean)
    deleteEvents(@Args('deleteEventInput') eventID: number):Promise<DeleteResult> {

        return this.eventsService.deleteEvent(eventID);    
    }*/

    @Mutation(returns => Event)
    createEvent(@Args('createEventInput') createEventInput:CreateEventInput): Promise<Event> {

        return (this.eventsService.createEvent(createEventInput));
    }

}
