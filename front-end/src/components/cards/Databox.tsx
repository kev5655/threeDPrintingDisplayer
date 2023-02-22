import React, {useEffect} from "react";
import SimpleGraph from "../graph/SimpleGraph";
import {Printable} from "../../utils/objects/Printable";

type DataboxProps = {
    title: string;
    firstTitle: string;
    firstData: Printable;
    secondTitle: string;
    secondData: Printable;
    onClick: () => void;
}

let tempArray: number[] = new Array<number>()

const Databox = ({title, firstTitle, firstData, secondTitle, secondData, onClick}: DataboxProps): JSX.Element => {

    useEffect(() => {
        tempArray.push(firstData.value)
        console.log(tempArray.length)
        if(tempArray.length > 7){
            console.log("Slice")
            tempArray.shift();
        }
    }, [firstData.value])





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
                    <SimpleGraph x={50} y={50} data={tempArray}/>
                </div>
            </div>
            <div>
                <p>{secondTitle}</p>
                <div className="flex gap-3">
                    <p className="text-2xl pt-3 pl-6">{secondData.print()}</p>
                    <SimpleGraph x={50} y={50} data={[18, 19.5, 19.7, 19.7, 19.1, 18.5, 17.1]}/>
                </div>
            </div>
        </div>
    );
}

export default Databox;