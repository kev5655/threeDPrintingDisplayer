package kev.threeDPrintingDisplayer.service;

import kev.threeDPrintingDisplayer.controller.WebSocketController;
import kev.threeDPrintingDisplayer.model.Data;
import kev.threeDPrintingDisplayer.model.Meassage;
import kev.threeDPrintingDisplayer.model.Sensor;
import kev.threeDPrintingDisplayer.repo.SensorRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class MessageService {

    private final WebSocketController webSocketController;
    private final SensorRepo sensorRepo;
    private final MongoTemplate mongoTemplate;

    public void sendMessage(String topic, String message){
        // Send over WebSocket
        Meassage meassage = new Meassage(topic, message);
        webSocketController.sendMessage(meassage);

        // Save in MongoDB
        Query query = new Query();
        query.addCriteria(Criteria.where("topic").is(topic));

        List<Sensor> senors = mongoTemplate.find(query, Sensor.class);

        if(senors.isEmpty()){
            Sensor sensor = new Sensor(topic, List.of(new Data(Float.parseFloat(message), LocalDateTime.now())));
            log.info("MONGODB -- Add new Sensor Document with Topic {} and first date {}", sensor.getTopic(), sensor.getDataList());
            sensorRepo.insert(sensor);
        } else if (senors.size() == 1) {
            Sensor sensor = senors.get(0);
            sensor.getDataList().add(new Data(Float.parseFloat(message), LocalDateTime.now()));
            log.info("MONGODB -- Update Sensor data on Topic {} with data {}", sensor.getTopic(), sensor.getDataList());
            sensorRepo.save(sensor);
        } else {
            throw new IllegalStateException("two or more documents has the same topic");
        }


    }

}
