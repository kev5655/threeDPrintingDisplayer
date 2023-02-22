package kev.threeDPrintingDisplayer.webSocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class WebSocketController {

    @MessageMapping("/temperature")
    @SendTo("/topic/printingRoom")
    public Meassage temperatureMessage(String temperature) throws InterruptedException {
        Thread.sleep(3000);
        return new Meassage(HtmlUtils.htmlEscape(temperature));
    }

    @MessageMapping("/humidity")
    @SendTo("/topic/printingRoom")
    public Meassage humidityMessage(String humidity) throws InterruptedException {
        Thread.sleep(3000);
        return new Meassage(HtmlUtils.htmlEscape(humidity));
    }

}
