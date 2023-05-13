import {useCallback, useEffect, useState} from "react";

import {Client, Message, over} from "stompjs"
import SockJS from "sockjs-client"

let stompClient: Client;

export const useWebSocket = () => {

    const [printingRoomTemp, setPrintingRoomTemp] = useState(0);
    const [printingRoomHumi, setPrintingRoomHumi] = useState(0);

    const onConnected = useCallback(() => {
        stompClient.subscribe("/3D-Drucker/LightControl/data/temperature", onMessageReceived_PrintingRoomTemp);
        stompClient.subscribe("/3D-Drucker/LightControl/data/humidity", onMessageReceived_PrintingRoomHumi);
    }, []);

    useEffect(() => {
        let Sock = new SockJS('http://localhost:8081');
        stompClient = over(Sock);
        // stompClient.debug = () => {};
        stompClient.connect({}, onConnected, (err) => {console.error(err);});
    }, [onConnected])


    const onMessageReceived_PrintingRoomTemp = (payload: Message) => {
        let message: JSON = JSON.parse(payload.body);
        setPrintingRoomTemp(message as unknown as number)
        console.log(message);
    }

    const onMessageReceived_PrintingRoomHumi = (payload: Message) => {
        let message: JSON = JSON.parse(payload.body);
        setPrintingRoomHumi(message as unknown as number)
        console.log(message);
    }

    return [printingRoomTemp, printingRoomHumi];

}