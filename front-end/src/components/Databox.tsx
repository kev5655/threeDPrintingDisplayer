import React from "react";
import SimpleGraph from "./graph/SimpleGraph";

type DataboxData = {
    name: string;
    temp: number;
    humi: number;
    onClick: () => void;
}

const Databox = ({name, temp, humi, onClick}: DataboxData): JSX.Element => {

    return (
        <div onClick={onClick} className="w-72 h-4/5
                        rounded-2xl
                        p-4
                        bg-gradient-to-r from-blue to-dark-blue">
            <h1 className="pb-16">{name}</h1>
            <div className="pb-6">
                <p>Temperatur</p>
                <p className="text-2xl pt-3 pl-6">{temp}</p>
            </div>
            <div>
                <p>Luftfeuchtigkeit</p>
                <div className="flex gap-3">
                    <p className="text-2xl pt-3 pl-6">{humi}</p>
                    <SimpleGraph x={50} y={50} data={[18, 19.5, 19.7, 19.7, 19.1, 18.5, 17.1]}/>
                </div>
            </div>
        </div>
    );
}

export default Databox;