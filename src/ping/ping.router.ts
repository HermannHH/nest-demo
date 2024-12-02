import { Query, Router } from 'nestjs-trpc';

@Router({ alias: 'ping' })
export class PingRouter {
  constructor() {}

  @Query()
  async pong(): Promise<{ message: string }> {
    return { message: 'Hello World' };
  }
}
