import React from "react";
import Image from "next/image";

import styles from "./index.module.css";
import cn from "classnames";

interface Props {
    data: {
        src: string;
        name: string;
        selected: boolean;
    };
}

//TODO EDIT SELECTED
export const Card = ({ data }: Props) => {
    return (
        <div className={cn(styles.base, { [styles.selected]: data.selected })}>
            <div className=" w-20 h-20 mx-5 mt-3 mb-5 ">
                <Image
                    width="100%"
                    height="100%"
                    className="rounded-full"
                    src={data.src}
                />
            </div>
            <div className="text-white font-light mb-4 text-center ">
                {data.name}
            </div>
        </div>
    );
};
