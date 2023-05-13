/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect } from 'mqtt';
import { debug, error, info } from 'ps-logger';

@Injectable()
export class MqttService implements OnModuleInit {
  private mqttClient;
  onModuleInit() {
    const host = '192.168.1.138';
    const port = '1883';
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

    const connectUrl = `mqtt://${host}:${port}`;
    const topic = '/nodejs/mqtt/sp';

    this.mqttClient = connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 1000,
    });
    this.mqttClient.subscribe('/test');

    this.mqttClient.on('connect', () => {
      debug('Connected to Mqtt');
      info('Connected to Mqtt');
    });

    this.mqttClient.on('error', () => {
      error('Error in connection to Mqtt');
    });

    this.mqttClient.on('message', (topic, message) => {
      debug(`topic: ${topic} message: ${message}`);
      info('test');
    });
  }

  publish(topic: string, payload: string): string {
    info(`Publishing to ${topic}`);
    debug(`Publishing to ${topic}`);

    this.mqttClient.publish(topic, payload);
    return `Publishing to ${topic}`;
  }
}
