import { Module } from '@nestjs/common';
import { MyGateway } from './websocket';

@Module({
  imports: [MyGateway],
})
export class WebsocketModule {}
