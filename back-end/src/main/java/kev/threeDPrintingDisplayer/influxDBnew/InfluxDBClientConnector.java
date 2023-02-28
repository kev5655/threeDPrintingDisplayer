package kev.threeDPrintingDisplayer.influxDBnew;

import com.influxdb.client.InfluxDBClient;
import com.influxdb.client.InfluxDBClientFactory;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;

@Setter
@Getter
@ToString
@Controller
@Configuration
public class InfluxDBClientConnector {

    private final String url;
    private final String token;
    private final String bucket;
    private final String org;

    public InfluxDBClientConnector(@Value("${spring.influxdb.url}") String url,
                                   @Value("${spring.influxdb.token}") String token,
                                   @Value("${spring.influxdb.bucket}")  String bucket,
                                   @Value("${spring.influxdb.org}") String org) {
        this.url = url;
        this.token = token;
        this.bucket = bucket;
        this.org = org;
    }

    public InfluxDBClient getFactory(){
        return InfluxDBClientFactory.create(url, token.toCharArray(), org, bucket);
    }

}
