import React from "react";
import cn from "classnames";
interface Props {
    value: string;
    onChange: React.ChangeEventHandler;
    onSubmit: React.FormEventHandler;
    className?: string;
}
export const EntryBox = ({ value, onChange, onSubmit, className }: Props) => {
    return (
        <div>
            <form
                className=" text-white flex text-xl md:text-3xl "
                onSubmit={onSubmit}
            >
                <input
                    className={cn(
                        "bg-dark-800 w-48 md:w-80 pl-2 md:pl-4 md:py-2 py-1 rounded-l-md ",
                        className,
                    )}
                    placeholder="Buraya bir ID girin."
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={value}
                    style={{ outline: "none" }}
                    onChange={onChange}
                />
                <input
                    className="bg-dark-800 w-24 md:w-36 rounded-r-md self-end  py-1 md:py-2 font-light "
                    type="submit"
                />
            </form>
        </div>
    );
};
