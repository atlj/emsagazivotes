import React from "react";
import cn from "classnames";

import { Check } from "@components/icons";
import { Container } from "@components";

interface Props {}
const Main = ({}: Props) => (
    <Container className="justify-center">
        <div className=" flex flex-col self-center items-center ">
            <div className=" flex container w-28 h-28 ">
                <Check />
            </div>
            <h1 className="text-white font-extralight mt-6 text-2xl ">
                Oylarınız başarıyla verildi
            </h1>
        </div>
    </Container>
);

export default Main;
