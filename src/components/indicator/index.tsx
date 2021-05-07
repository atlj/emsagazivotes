import cn from "classnames";
import styles from "./index.module.css";

interface Props {
    index: number;
    count: number;
    className?: string;
    gridclassName?: string;
}

const IndicatorItem = ({ itemIndex, currentIndex }) => {
    return (
        <li
            className={cn(styles.indicatorItem, {
                [styles.indicatorItemSelected]: itemIndex === currentIndex,
            })}
        ></li>
    );
};

export const Indicator = ({
    index,
    count,
    className,
    gridclassName,
}: Props) => {
    return (
        <div className={cn("flex", className)}>
            <ul className={cn(styles.indicatorGrid, gridclassName)}>
                {[...Array(count)].map((_, itemIndex) => (
                    <IndicatorItem
                        key={itemIndex}
                        itemIndex={itemIndex}
                        currentIndex={index}
                    />
                ))}
            </ul>
        </div>
    );
};
