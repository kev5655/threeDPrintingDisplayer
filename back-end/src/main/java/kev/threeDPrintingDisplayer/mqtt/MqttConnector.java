package kev.threeDPrintingDisplayer.mqtt;

import kev.threeDPrintingDisplayer.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.core.MessageProducer;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHandler;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
//https://www.youtube.com/watch?v=HHKrKwI--Yw&ab_channel=ParsCoder

@Slf4j
@RequiredArgsConstructor
@Configuration
public class MqttConnector {

    private final MessageService messageService;
    private List<String> topics = new LinkedList<>();

    public MqttPahoClientFactory mqttClientFactory(String broker_url) {
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        MqttConnectOptions options = new MqttConnectOptions();
        options.setServerURIs(new String[]{broker_url});
        options.setCleanSession(true);

        factory.setConnectionOptions(options);
        return factory;
    }

    @Bean
    public MessageChannel mqttInputChannel() {
        return new DirectChannel();
    }

    @Bean
    public MessageProducer inbound(@Value("${mqtt.broker-url}") String broker_url,
                                   @Value("${mqtt.client-id}") String client_id,
                                   @Value("${mqtt.topic-list}") List<String> topics) {
        log.info("Connect to broker url {}", broker_url);
        log.info("Client is {}", client_id);
        log.info("Subscribed topic are {}", topics.toArray());
        this.topics = topics;
        MqttPahoMessageDrivenChannelAdapter adapter =
                new MqttPahoMessageDrivenChannelAdapter(client_id, mqttClientFactory(broker_url));
        for (String topic : topics) {
            adapter.addTopic(topic);
        }
        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(2);
        adapter.setOutputChannel(mqttInputChannel());
        return adapter;
    }

    @Bean
    @ServiceActivator(inputChannel = "mqttInputChannel")
    public MessageHandler handler() {
        return message -> {
            String topic = Objects.requireNonNull(message.getHeaders().get(MqttHeaders.RECEIVED_TOPIC)).toString();
            log.info("Received Message over Mqtt on topic {} with payload {}",
                    topic, message.getPayload());
            messageService.sendMessage(topic, (String) message.getPayload());
        };
    }


}
