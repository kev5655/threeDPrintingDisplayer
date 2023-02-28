package kev.threeDPrintingDisplayer.service;

import com.influxdb.client.WriteApiBlocking;
import com.influxdb.client.domain.WritePrecision;
import com.influxdb.client.write.Point;
import kev.threeDPrintingDisplayer.controller.WebSocketController;
import kev.threeDPrintingDisplayer.influxDBnew.InfluxDBClientConnector;
import kev.threeDPrintingDisplayer.model.Meassage;
import lombok.RequiredArgsConstructor;
import lombok.Synchronized;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;

@RequiredArgsConstructor
@Service
@Slf4j

public class MessageService {

    private final WebSocketController webSocketController;
    private final InfluxDBClientConnector influxDBClientConnector;

    @Synchronized
    public void sendMessage(String topic, String message){
        // Send over WebSocket
        Meassage meassage = new Meassage(topic, message);
        webSocketController.sendMessage(meassage);

        // Influx DB
        String measurementName = extractMeasurementName(topic);

        WriteApiBlocking writeApi = influxDBClientConnector.getFactory().getWriteApiBlocking();
        Point point = Point.measurement(topic)
                .addTag("location", "3D-Printer")
                .addField(measurementName, Float.parseFloat(message))
                .time(Instant.now(), WritePrecision.MS);
        writeApi.writePoint(point);


    }

    public String extractMeasurementName(String topic) {
        return topic.split("/")[topic.split("/").length - 1];
    }


}
