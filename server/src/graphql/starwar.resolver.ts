import { Args, Query, Resolver } from '@nestjs/graphql';
import { AppService } from '../app.service';

@Resolver('StarWar')
export class StarWarsResolver {
  constructor(private appService: AppService) {}

  @Query()
  getPerson(@Args('name') name: string) {
    return this.appService.findPerson(name);
  }

  @Query()
  getPeople(@Args('page') page?: number) {
    return this.appService.findPeople(page);
  }

  @Query()
  getCount() {
    return this.appService.findCount();
  }
}
