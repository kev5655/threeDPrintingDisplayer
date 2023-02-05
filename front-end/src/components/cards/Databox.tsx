import React from "react";
import SimpleGraph from "../graph/SimpleGraph";

type DataboxData = {
    title: string;
    firstTitle: string;
    firstData: number;
    secondTitle: string;
    secondData: number;
    onClick: () => void;
}

const Databox = ({title, firstTitle, firstData, secondTitle, secondData, onClick}: DataboxData): JSX.Element => {

    return (
        <div onClick={onClick} className="w-72 h-4/5
                        rounded-2xl
                        p-4
                        bg-gradient-to-r from-blue to-dark-blue">
            <h1 className="pb-16">{title}</h1>
            <div className="pb-6">
                <p>{firstTitle}</p>
                <p className="text-2xl pt-3 pl-6">{firstData}</p>
            </div>
            <div>
                <p>{secondTitle}</p>
                <div className="flex gap-3">
                    <p className="text-2xl pt-3 pl-6">{secondData}</p>
                    <SimpleGraph x={50} y={50} data={[18, 19.5, 19.7, 19.7, 19.1, 18.5, 17.1]}/>
                </div>
            </div>
        </div>
    );
}

export default Databox;