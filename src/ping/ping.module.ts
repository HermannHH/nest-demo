import { Module } from '@nestjs/common';
import { PingRouter } from './ping.router';

@Module({
  providers: [PingRouter],
})
export class PingModule {}
