import React, {useCallback, useEffect, useState} from "react";
import Databox from "../components/cards/Databox";
import Background from "../layout/Background";
import RaspiData from "../components/cards/RaspiData";
import {TemperaturValue} from "../utils/objects/TemperaturValue";
import {PercentValue} from "../utils/objects/PercentValue";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import {Client, Message, over} from "stompjs"
import SockJS from "sockjs-client"

import "swiper/css";
import "swiper/css/pagination";

let stompClient: Client;

const Overview = (): JSX.Element => {

    const [printingRoomTemp, setPrintingRoomTemp] = useState(0);
    const [printingRoomHumi, setPrintingRoomHumi] = useState(0);

    const onConnected = useCallback(() => {
        stompClient.subscribe("/3D-Drucker/LightControl/data/temperature", onMessageReceived_PrintingRoomTemp);
        stompClient.subscribe("/3D-Drucker/LightControl/data/humidity", onMessageReceived_PrintingRoomHumi);
    }, []);

    useEffect(() => {
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
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

    const onShowGraphPrintingRoom = () => {
        console.log("Show Printing Room Graph");
    }

    const onShowGraphFilamentRoom = () => {
        console.log("Show Filament Room Graph");
    }

    return (

        <Background>
            <Swiper slidesPerView={2}
                    loop={true} // Not Work issue in the Lib
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    // onSwiper={(swiper) => console.log("Swipe")}
                    // onSlideChange={() => console.log('slide change')}
                    className="h-full w-full">
                <SwiperSlide className="flex-im justify-center place-items-center">
                    <Databox title="Druckraum"
                             firstTitle="Temperatur"
                             firstData={new TemperaturValue(printingRoomTemp)}
                             secondTitle="Luftfeuchtigkeit"
                             secondData={new PercentValue(printingRoomHumi)}
                             onClick={onShowGraphPrintingRoom}/>
                </SwiperSlide>

                <SwiperSlide className="flex-im justify-center place-items-center">
                    <Databox title="Filamentraum"
                             firstTitle="Temperatur"
                             firstData={new TemperaturValue(0)}
                             secondTitle="Luftfeuchtigkeit"
                             secondData={new PercentValue(0)}
                             onClick={onShowGraphFilamentRoom}/>
                </SwiperSlide>

                <SwiperSlide className="flex-im justify-center place-items-center">
                    <RaspiData title="Raspberry" firstTitle="CPU Auslastung" firstData={new PercentValue(76)}
                               secondTitle="RAM Auslastung"
                               secondData={new PercentValue(79)} thirdTitle="CPU Temperatur"
                               thirdData={new PercentValue(48.7)}/>
                </SwiperSlide>


            </Swiper>
        </Background>


    )
        ;
}

export default Overview;