import React from "react";
import Databox from "../components/cards/Databox";
import Background from "../layout/Background";
import RaspiData from "../components/cards/RaspiData";
import {TemperaturValue} from "../utils/objects/TemperaturValue";
import {PercentValue} from "../utils/objects/PercentValue";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import classes from "./Overview.module.css"


const Overview = (): JSX.Element => {

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
                             firstData={new TemperaturValue(23.5)}
                             secondTitle="Luftfeuchtigkeit"
                             secondData={new PercentValue(50.7)}
                             onClick={onShowGraphPrintingRoom}/>
                </SwiperSlide>

                <SwiperSlide className="flex-im justify-center place-items-center">
                    <Databox title="Filamentraum"
                             firstTitle="Temperatur"
                             firstData={new TemperaturValue(22.8)}
                             secondTitle="Luftfeuchtigkeit"
                             secondData={new PercentValue(25.3)}
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