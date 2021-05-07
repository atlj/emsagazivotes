import cn from "classnames";
interface Props {
    children: any;
    className?: string;
}

export const Container = ({ children, className }: Props) => {
    return (
        <div className={cn("min-h-screen flex flex-col", className)}>
            {children}
        </div>
    );
};
