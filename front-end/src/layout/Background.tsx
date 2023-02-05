import React, {FC} from "react";

type Props = {
    className?: string;
    children?: React.ReactNode
};

const Background: FC<Props> = ({children, className}) => {
    const style = "h-screen w-screen bg-gradient-to-r from-dark-blue to-blue " + className;

    return (
        <div className={style}>
            {children}
        </div>);
}

export default Background;