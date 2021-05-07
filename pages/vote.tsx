import React from "react";
import { Card, Container, Indicator } from "@components";

const Main = () => {
    return (
        //TODO ADD UL LI
        <Container>
            <Indicator
                className="w-5/6 self-center mt-4 "
                count={5}
                index={1}
            />
            <h1 className="text-white text-center text-2xl container my-16  ">
                Bilimsel Birim Sorumlusu
            </h1>
            <div className="flex justify-center container ">
                <div className=" grid grid-flow-row grid-cols-2  gap-x-8 gap-y-7 md:grid-cols-4 ">
                    <Card
                        data={{
                            selected: false,
                            src:
                                "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
                            name: "İlk Aday",
                        }}
                    ></Card>
                    <Card
                        data={{
                            selected: false,
                            src:
                                "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
                            name: "İkinci Aday",
                        }}
                    ></Card>
                    <Card
                        data={{
                            selected: false,
                            src:
                                "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
                            name: "Üçüncü Aday",
                        }}
                    ></Card>
                </div>
            </div>
        </Container>
    );
};

export default Main;
