import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { info } from 'ps-logger';

@WebSocketGateway(8081, { cors: '*' })
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    info('Loaded Websocket Module');
  }
  @SubscribeMessage('message')
  onNewMessage(@MessageBody() body: any) {
    info(
      `-------------------------------- ${body} --------------------------------`,
    );
    this.server.emit('/3D-Drucker/LightControl/data/temperature', body);
  }
}
