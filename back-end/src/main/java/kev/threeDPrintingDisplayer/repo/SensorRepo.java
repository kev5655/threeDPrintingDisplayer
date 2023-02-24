package kev.threeDPrintingDisplayer.repo;

import kev.threeDPrintingDisplayer.model.Sensor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SensorRepo extends MongoRepository<Sensor, String> {
}
