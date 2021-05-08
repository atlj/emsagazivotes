import React from "react";
import cn from "classnames";
import styles from "./index.module.css";
interface Props {
    className?: string;
}
export const Loading = ({ className }: Props) => {
    return (
        <div className={className}>
            <div className={styles.roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
