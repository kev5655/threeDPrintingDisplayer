import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [MqttModule, WebsocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
