import React from "react";
import Databox from "../components/cards/Databox";
import Background from "../layout/Background";
import RaspiData from "../components/cards/RaspiData";


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
                     firstData={23.5}
                     secondTitle="Luftfeuchtigkeit"
                     secondData={50.7}
                     onClick={onShowGraphPrintingRoom}/>
            <RaspiData title="Raspberry" firstTitle="CPU Auslastung" firstData={76} secondTitle="RAM Auslastung"
                       secondData={79} thirdTitle="CPU Temperatur" thirdData={48.7}/>
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