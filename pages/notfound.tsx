import React from "react";
import { Container } from "@components";
import Link from "next/link";

const Main = () => {
    return (
        <Container className="text-center justify-center font-light ">
            <Link href="/">
                <a className="text-3xl">Böyle bir form elimizde yok 😔</a>
            </Link>
        </Container>
    );
};

export default Main;
