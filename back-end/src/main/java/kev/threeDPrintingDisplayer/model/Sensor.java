package kev.threeDPrintingDisplayer.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Document
public class Sensor {

    @Id
    private String id;
    private final String topic;
    private final List<Data> dataList;
}
