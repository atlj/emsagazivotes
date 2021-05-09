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
            <div className=" w-20 md:w-36 md:h-36 h-20 mx-5 mt-3 mb-5 md:mb-6 ">
                <Image
                    priority={true}
                    width="300px"
                    height="300px"
                    className="rounded-full"
                    src={data.src}
                />
            </div>
            <div className="text-white font-light md:text-2xl  mb-4 md:mb-6 w-28 md:w-40 text-center ">
                {data.name}
            </div>
        </div>
    );
};
