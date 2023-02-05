import React, {FC} from "react";
import {Printable} from "../../utils/objects/Printable";


type RaspiDataProps = {
    title: string;
    firstTitle: string;
    firstData: Printable;
    secondTitle: string;
    secondData: Printable;
    thirdTitle: string;
    thirdData: Printable;
}

const RaspiData: FC<RaspiDataProps> = ({
                                           title,
                                           firstTitle,
                                           firstData,
                                           secondTitle,
                                           secondData,
                                           thirdTitle,
                                           thirdData
                                       }) => {

    return (
        <div className="w-72 h-4/5
                        rounded-2xl
                        p-4
                        bg-gradient-to-r from-blue to-dark-blue">
            <h1 className="pb-16">{title}</h1>
            <div className="pb-3">
                <p>{firstTitle}</p>
                <p className="text-2xl pt-1.5 pl-6">{firstData.print()}</p>
            </div>
            <div className="pb-3">
                <p>{secondTitle}</p>
                <p className="text-2xl pt-1.5 pl-6">{secondData.print()}</p>
            </div>
            <div>
                <p>{thirdTitle}</p>
                <p className="text-2xl pt-1.5 pl-6">{thirdData.print()}</p>
            </div>
        </div>
    );
}

export default RaspiData;