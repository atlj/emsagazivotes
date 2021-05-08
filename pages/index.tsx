import React from "react";
import { useRouter } from "next/router";
import { EntryBox } from "@components";
import Link from "next/link";

const Main = () => {
    const [input, setInput] = React.useState<string>("");
    const router = useRouter();
    const handleSubmit: React.FormEventHandler = (event) => {
        event.preventDefault();
        router.push("/" + input);
    };
    const handleChange = (event) => {
        setInput(event.currentTarget.value);
    };

    return (
        <div className="flex min-h-screen flex-col items-center">
            <h1 className="text-white text-center mx-8 mt-24 text-3xl md:text-5xl  ">
                EMSA Gazi Votes 🎉{" "}
            </h1>
            <EntryBox
                className="mt-20 md:mt-40"
                value={input}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />
            <div className="text-white font-light md:text-xl mt-24   ">
                Created by:{" "}
                <Link href="https://github.com/atlj">
                    <a>atlj 🎊</a>
                </Link>
            </div>
        </div>
    );
};

export default Main;
