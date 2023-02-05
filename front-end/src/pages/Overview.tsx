import React from "react";
import Databox from "../components/Databox";
import Background from "../layout/Background";



const Overview = (): JSX.Element => {

    const onShowGraphPrintingRoom = () => {
        console.log("Show Printing Room Graph");
    }

    const onShowGraphFilamentRoom = () => {
        console.log("Show Filament Room Graph");
    }

    return (
        <Background className="flex items-center justify-evenly">
            <Databox onClick={onShowGraphPrintingRoom} name="Druckraum" temp={23.5} humi={50.7}/>
            <Databox onClick={onShowGraphFilamentRoom} name="Filamentraum" temp={22.8} humi={25.3}/>
        </Background>

    );
}

export default Overview;