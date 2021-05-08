import React from "react";
import { useRouter } from "next/router";

const Main = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.push("/");
    }, []);
    return <div />;
};

export default Main;
