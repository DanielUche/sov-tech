import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getPeople(@Query() query) {
    const { page } = query;
    return await this.appService.findPeople(page);
  }

  @Get('count')
  async getCount() {
    return await this.appService.findCount();
  }
}
