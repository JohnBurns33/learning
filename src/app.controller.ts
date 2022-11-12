import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';


export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY_TOKEN');
@Controller()
export class AppController {
  constructor(@Inject(USER_REPOSITORY_TOKEN) private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
