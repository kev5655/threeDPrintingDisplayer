import {useEffect, useState} from "react";

export const useMemoData = (data: number): number[] => {

    const [arr, setArr] = useState(new Array<number>());

    useEffect(() => {
        setArr(prevState => {
            if (prevState.length > 7) {
                prevState.shift();
            }
            return [...prevState, data];
        });

    }, [data])

    return arr;
}