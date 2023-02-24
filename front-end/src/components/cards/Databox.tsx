import React from "react";
import SimpleGraph from "../graph/SimpleGraph";
import {Printable} from "../../utils/objects/Printable";
import {useMemoData} from "../../hook/useMemoData";

type DataboxProps = {
    title: string;
    firstTitle: string;
    firstData: Printable;
    secondTitle: string;
    secondData: Printable;
    onClick: () => void;
}

const Databox = ({title, firstTitle, firstData, secondTitle, secondData, onClick}: DataboxProps): JSX.Element => {

    const firstArray: number[] = useMemoData(firstData.value);
    const secondArray: number[] = useMemoData(secondData.value);


    return (
        <div onClick={onClick} className="w-72 h-4/5
                        rounded-2xl
                        p-4
                        bg-gradient-to-r from-blue to-dark-blue">
            <h1 className="pb-16">{title}</h1>
            <div className="pb-6">
                <p>{firstTitle}</p>
                <div className="flex gap-3">
                    <p className="text-2xl pt-3 pl-6">{firstData.print()}</p>
                    <SimpleGraph x={50} y={50} data={firstArray}/>
                </div>
            </div>
            <div>
                <p>{secondTitle}</p>
                <div className="flex gap-3">
                    <p className="text-2xl pt-3 pl-6">{secondData.print()}</p>
                    <SimpleGraph x={50} y={50} data={secondArray}/>
                </div>
            </div>
        </div>
    );
}

export default Databox;