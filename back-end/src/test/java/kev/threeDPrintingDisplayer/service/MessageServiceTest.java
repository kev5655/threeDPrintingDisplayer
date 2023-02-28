package kev.threeDPrintingDisplayer.service;

import kev.threeDPrintingDisplayer.controller.WebSocketController;
import kev.threeDPrintingDisplayer.influxDBnew.InfluxDBClientConnector;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.*;

class MessageServiceTest {

    @Mock
    WebSocketController webSocketController;
    @Mock
    InfluxDBClientConnector influxDBClientConnector;
    @InjectMocks
    MessageService service;

    String topic = "/3D-Drucker/LightControl/data/humidity";
    String measurementName = "humidity";

    @BeforeEach
    void setUp() {
        service = new MessageService(webSocketController, influxDBClientConnector);
    }

    @Test
    void extractMeasurementName() {
        assertEquals(measurementName, service.extractMeasurementName(topic));
    }
}