import React from "react";
import Databox from "../components/cards/Databox";
import Background from "../layout/Background";
import RaspiData from "../components/cards/RaspiData";
import {TemperaturValue} from "../utils/objects/TemperaturValue";
import {PercentValue} from "../utils/objects/PercentValue";


const Overview = (): JSX.Element => {

    const onShowGraphPrintingRoom = () => {
        console.log("Show Printing Room Graph");
    }

    const onShowGraphFilamentRoom = () => {
        console.log("Show Filament Room Graph");
    }

    return (
        <Background className="flex items-center justify-evenly">
            <Databox title="Druckraum"
                     firstTitle="Temperatur"
                     firstData={new TemperaturValue(23.5)}
                     secondTitle="Luftfeuchtigkeit"
                     secondData={new PercentValue(50.7)}
                     onClick={onShowGraphPrintingRoom}/>
            <RaspiData title="Raspberry" firstTitle="CPU Auslastung" firstData={new PercentValue(76)}
                       secondTitle="RAM Auslastung"
                       secondData={new PercentValue(79)} thirdTitle="CPU Temperatur"
                       thirdData={new PercentValue(48.7)}/>
            {/*<Databox title="Filamentraum"*/}
            {/*         firstTitle="Temperatur"*/}
            {/*         firstData={22.8}*/}
            {/*         secondTitle="Luftfeuchtigkeit"*/}
            {/*         secondData={25.3}*/}
            {/*         onClick={onShowGraphFilamentRoom} />*/}
        </Background>

    );
}

export default Overview;