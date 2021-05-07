import React from "react";
import { Card, Container, Indicator, BottomButton } from "@components";
import { ArrowRight } from "@components/icons";
import Link from "next/link";

interface option {
    name: string;
    icon: string;
}

interface pageData {
    amount: number;
    title: string;
    options: Array<option>;
}

const ListCard = ({ name, icon, selected, onClick }) => (
    <li onClick={onClick}>
        <Card data={{ name, src: icon, selected }} />
    </li>
);

const Main = () => {
    const [pageData, setpageData] = React.useState<pageData>({
        amount: 1,
        title: "Test",
        options: [
            { icon: "/res/person-icon.png", name: "Option1" },
            { icon: "/res/person-icon.png", name: "Option2" },
            { icon: "/res/person-icon.png", name: "Option3" },
        ],
    }); //TODO THIS WILL COME FROM BACKEND
    const [selected, setSelected] = React.useState<Array<number>>([]);
    return (
        <Container>
            <Indicator
                className="w-5/6 md:w-5/12 self-center mt-4 "
                count={5}
                index={1}
            />
            <h1 className="text-white text-center text-2xl self-center container my-16 md:text-4xl  ">
                {pageData.title}
            </h1>
            <div className="flex justify-center self-center container ">
                <ul className=" grid grid-flow-row grid-cols-2  gap-x-8 gap-y-7 md:grid-cols-4 ">
                    {pageData.options.map((data, index) => (
                        <ListCard
                            onClick={() => {
                                if (pageData.amount === 1) {
                                    if (selected.indexOf(index) > -1) {
                                        setSelected([]);
                                    } else {
                                        setSelected([index]);
                                    }
                                } else {
                                    if (selected.indexOf(index) > -1) {
                                        let _selected = selected.slice();
                                        _selected.splice(
                                            _selected.indexOf(index),
                                            1,
                                        );
                                        setSelected(_selected);
                                    } else {
                                        if (selected.length < pageData.amount) {
                                            setSelected([...selected, index]);
                                        }
                                    }
                                }
                            }}
                            icon={data.icon}
                            name={data.name}
                            selected={
                                selected.indexOf(index) > -1 ? true : false
                            }
                        />
                    ))}
                </ul>
            </div>
            <Link href="/success">
                <a>Success</a>
            </Link>
            <BottomButton
                className="bottom-0 right-0 mb-10 mr-5 fixed w-16 h-16 "
                appearance={
                    pageData.amount === selected.length ? "visible" : "hidden"
                }
                onClick={() => {
                    setSelected([]);
                    //TODO MAKE BOTTOM BUTTON
                }}
            >
                <ArrowRight />
            </BottomButton>
        </Container>
    );
};

export default Main;
