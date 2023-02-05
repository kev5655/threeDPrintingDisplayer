import React, {FC} from "react";

const y_offset = 8;

type Data = {
    x: number;
    y: number;
    data: number[];
}

const SimpleGraph: FC<Data> = ({x, y, data}) => {

    y = y + y_offset;

    const y_middle = y / 2;
    const x_gap = x / (data.length - 1);
    const y_average = data.reduce( ( p, c ) => p + c, 0 ) / data.length; // Calc Average
    const y_data_offset = y_middle - y_average

    return (
        <svg width={x} height={y}>
            {/*Helper Lines*/}
            {/*<line x1={0} x2={x} y1={y_offset} y2={y_offset} style={{stroke: "red"}}></line>*/}
            {/*<line x1={0} x2={0} y1={0} y2={y} style={{stroke: "pink"}}></line>*/}
            {/*<line x1={0} x2={x} y1={y_middle} y2={y_middle} style={{stroke: "pink"}}></line>*/}
            {
                data.map((value, index, array) => {
                    if (index !== data.length - 1) {
                        return <line x1={index * x_gap}
                                     x2={index * x_gap + x_gap}
                                     y1={y - value - y_data_offset}
                                     y2={y - array[index + 1] - y_data_offset}
                                     style={{
                                         stroke: "black",
                                         strokeWidth: "2px"
                                     }}>
                        </line>
                    } else return null
                })
            }
        </svg>
    );
}

export default SimpleGraph;