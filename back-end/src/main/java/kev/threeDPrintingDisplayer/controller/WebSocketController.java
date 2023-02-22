package kev.threeDPrintingDisplayer.controller;

import kev.threeDPrintingDisplayer.modle.Meassage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Slf4j
@Controller
public class WebSocketController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    public void sendMessage(Meassage meassage){
        log.info("Send Message to Client over ws on topic {} with payload {}",
                meassage.getTopic(),
                meassage.getContent());
        simpMessagingTemplate.convertAndSend(meassage.getTopic(), meassage.getContent());
    }

}
