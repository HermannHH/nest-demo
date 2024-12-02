import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TRPCModule } from 'nestjs-trpc';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    TRPCModule.forRoot(),
    PingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
