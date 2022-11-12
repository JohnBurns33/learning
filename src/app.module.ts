import { Module } from '@nestjs/common';
import { AppController, USER_REPOSITORY_TOKEN } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{provide: USER_REPOSITORY_TOKEN, useClass: AppService}],
})
export class AppModule {}
