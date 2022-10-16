import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateEventInput } from './dto/create-event.input';
import { Event } from './events.entity'
import { EventsService } from './events.service';

@Resolver(of => Event)
export class EventsResolver {

    constructor(private eventsService:EventsService) {}

    @Query(returns => Event)
    getEvent(@Args('eventName', {type: () => String}) eventName: string): Promise<Event> {

        return this.eventsService.findEvent(eventName);
    }
    events(): Promise<Event[]> {

        return this.eventsService.findAll();
    }
    deleteEvents(@Args('eventName', {type: () => String}) eventName: string): void {
        return this.eventsService.deleteEvent(eventName);
    }
    
    @Mutation(returns => Event)
    createEvent(@Args('createEventInput')createEventInput:CreateEventInput) : Promise<Event> {
        return this.eventsService.createEvent(createEventInput);
    }
}
