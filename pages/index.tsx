import React from "react";
import Link from "next/link";

import { Container } from "@components";

const Home: React.FC = () => {
    return (
        <Container>
            <div></div>
            <Link href="/vote">
                <a>vote</a>
            </Link>
        </Container>
    );
};

export default Home;
