import React from "react";
import cn from "classnames";
import styles from "./index.module.css";

interface Props {
    onClick: React.MouseEventHandler;
    children: JSX.Element;
    className?: string;
    appearance: "visible" | "hidden";
}
export const BottomButton = ({
    onClick,
    children,
    className,
    appearance,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "rounded-full bg-dark-800 w-12 h-12 md:w-24 md:h-24  flex items-center justify-center ",
                className,
                {
                    [styles.visible]: appearance === "visible",
                    [styles.hidden]: appearance === "hidden",
                },
            )}
        >
            {children}
        </div>
    );
};
