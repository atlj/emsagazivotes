import React from "react";
import { Card, Container, Indicator, BottomButton } from "@components";
import { ArrowRight } from "@components/icons";
import { useRouter } from "next/router";
import { DataContext } from "@data/datacontext";

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
    const router = useRouter();
    const context = React.useContext(DataContext);
    const [answers, setAnswers] = React.useState<Array<Array<number>>>([]);
    const [pageIndex, setpageIndex] = React.useState<number>(0);

    React.useEffect(() => {
        if (answers.length === context.pages.length) {
            console.log(answers);
            //TODO SEND DATA TO DATABASE
            router.push("/success");
        }
    }, [answers]);

    const [selected, setSelected] = React.useState<Array<number>>([]);

    React.useEffect(() => {
        if (pageIndex > 0) {
            setAnswers([...answers, selected]);
            setSelected([]);
        }
    }, [pageIndex]);

    const pageData = React.useMemo<pageData>(() => context.pages[pageIndex], [
        pageIndex,
    ]);
    if (pageIndex < context.pages.length) {
        return (
            <Container>
                <Indicator
                    className="w-5/6 md:w-5/12 self-center mt-4 "
                    count={context.pages.length}
                    index={pageIndex}
                />
                <h1 className="text-white text-center text-2xl self-center container my-16 md:text-4xl  ">
                    {pageData.title}
                </h1>
                <div className="flex justify-center self-center container ">
                    <ul className=" grid grid-flow-row grid-cols-2  gap-x-8 gap-y-7 md:grid-cols-4 ">
                        {pageData.options.map((data, index) => (
                            <ListCard
                                key={index}
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
                                            if (
                                                selected.length <
                                                pageData.amount
                                            ) {
                                                setSelected([
                                                    ...selected,
                                                    index,
                                                ]);
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
                <BottomButton
                    className="bottom-0 right-0 mb-10 mr-5 md:mr-24 md:mb-20 fixed w-16 h-16 "
                    appearance={
                        pageData.amount === selected.length
                            ? "visible"
                            : "hidden"
                    }
                    onClick={() => {
                        setpageIndex(pageIndex + 1);
                    }}
                >
                    <ArrowRight />
                </BottomButton>
            </Container>
        );
    } else {
        return <div />;
    }
};

export default Main;
