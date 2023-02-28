package kev.threeDPrintingDisplayer;

import com.influxdb.client.domain.WritePrecision;
import com.influxdb.client.write.Point;
import kev.threeDPrintingDisplayer.influxDBnew.InfluxDBClientConnector;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.Instant;

@SpringBootApplication
public class ThreeDPrintingDisplayerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThreeDPrintingDisplayerApplication.class, args);
	}


	@Bean
	public CommandLineRunner runner(InfluxDBClientConnector influxDBClientConnector) {
		return args -> {
			Point point = Point.measurement("test").addField("temperatur", 10).time(Instant.now(), WritePrecision.MS);
			influxDBClientConnector.getFactory().getWriteApiBlocking().writePoint(point);
		};
	}

}
