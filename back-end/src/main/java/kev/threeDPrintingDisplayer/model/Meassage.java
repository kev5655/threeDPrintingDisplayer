package kev.threeDPrintingDisplayer.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class Meassage {

    private final String topic;
    private final String content;

}
