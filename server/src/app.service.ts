import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { StartWar } from './types/starwars.types';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  async findPeople(page?: number): Promise<StartWar[]> {
    try {
      const res = await this.httpService
        .get(`https://swapi.dev/api/people/${page ? `?page=${page}` : ''}`)
        .toPromise();
      return res.data.results;
    } catch (error) {
      throw new Error('Not Found');
    }
  }

  async findCount(): Promise<number> {
    try {
      const res = await this.httpService
      .get(`https://swapi.dev/api/people`)
      .toPromise();
      return res.data.count;
    } catch (error) {
      throw new Error('Not Found');
    }
  }

  async findPerson(name: string): Promise<StartWar> {
    try {
      const res = await this.httpService
        .get(`https://swapi.dev/api/people/?search=${name}`)
        .toPromise();
      return res.data.results[0];
    } catch (error) {
      throw new Error('Not Found');
    }
  }
}
