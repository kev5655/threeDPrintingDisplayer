package kev.threeDPrintingDisplayer.service;

import kev.threeDPrintingDisplayer.controller.WebSocketController;
import kev.threeDPrintingDisplayer.model.Meassage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MessageService {

    private final WebSocketController webSocketController;

    public void sendMessage(String topic, String message){
        Meassage meassage = new Meassage(topic, message);
        webSocketController.sendMessage(meassage);
    }

}
