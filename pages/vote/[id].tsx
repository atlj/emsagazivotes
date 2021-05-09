import React from "react";
import { Card, Container, Indicator, BottomButton, Loading } from "@components";
import { ArrowRight, ArrowLeft } from "@components/icons";
import { useRouter } from "next/router";
import firebase, { useAuth } from "@data/firebase";

interface option {
    name: string;
    icon: string;
    propName?: string;
}
interface pageData {
    amount: number;
    title: string;
    options: Array<option>;
}

interface repeat {
    [prop: string]: number;
}
interface rules {
    repeat: repeat;
}

interface voteData {
    name: string;
    icon: string;
    rules?: rules;
    pages: Array<pageData>;
}

interface interfaceRepeats {
    [propName: string]: number;
}

const ListCard = ({ name, icon, selected, onClick }) => (
    <li onClick={onClick}>
        <Card data={{ name, src: icon, selected }} />
    </li>
);

const Main = () => {
    const router = useRouter();
    const authcontext = useAuth();
    const [lastRepeats, setlastRepeats] = React.useState<
        Array<interfaceRepeats>
    >([]);
    const [repeats, setRepeats] = React.useState<interfaceRepeats>({});
    const [databaseData, setdatabaseData] = React.useState<voteData | false>(
        false,
    );
    const [lastAnswers, setlastAnswers] = React.useState<Array<Array<number>>>(
        [],
    );
    const [answers, setAnswers] = React.useState<Array<Array<number>>>([]);
    const [pageIndex, setpageIndex] = React.useState<number>(0);

    const detectRepeats = (data: option, index: number): boolean => {
        if (databaseData !== false) {
            if (data.propName !== undefined) {
                if (databaseData.rules?.repeat !== undefined) {
                    if (
                        data.propName in databaseData.rules.repeat &&
                        data.propName in repeats
                    ) {
                        if (
                            databaseData.rules.repeat[data.propName] ===
                            repeats[data.propName]
                        ) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };

    React.useEffect(() => {
        if (authcontext.auth !== false) {
            firebase
                .database()
                .ref("answers")
                .child(router.query.id + "")
                .child(authcontext.auth.user.uid)
                .once("value", (snapshot) => {
                    //IF THIS USER HASN'T SUBMITTED ANY ANSWER
                    if (snapshot.val() === null) {
                        firebase
                            .database()
                            .ref("questions")
                            .child(router.query.id + "")
                            .once("value", (snapshot) => {
                                if (snapshot.val() !== null) {
                                    setdatabaseData(snapshot.val());
                                } else {
                                    router.push("/notfound");
                                }
                            });
                    } else {
                        router.push("/success");
                    }
                });
        }
    }, []);

    React.useEffect(() => {
        if (databaseData !== false) {
            if (
                answers.length === databaseData.pages.length &&
                authcontext.auth !== false
            ) {
                firebase
                    .database()
                    .ref("answers")
                    .child(router.query.id + "")
                    .child(authcontext.auth.user.uid)
                    .set(answers, (err) => {
                        console.log(err);

                        router.push("/success");
                    });
            }
        }
    }, [answers]);

    React.useEffect(() => {
        if (authcontext.auth === false) {
            router.push("/" + router.query.id);
        }
    }, []);

    const [selected, setSelected] = React.useState<Array<number>>([]);

    React.useEffect(() => {
        if (pageIndex > 0) {
            let tempanswers = [...answers];
            if (tempanswers.length == pageIndex) {
                tempanswers.pop();
            }
            setlastAnswers(tempanswers);
            setAnswers([...tempanswers, selected]);
            setSelected([]);
        }
    }, [pageIndex]);

    const pageData = React.useMemo<pageData>(() => {
        if (databaseData !== false) {
            return databaseData.pages[pageIndex];
        }
    }, [pageIndex, databaseData]);
    if (databaseData !== false) {
        if (pageIndex < databaseData.pages.length) {
            return (
                <Container>
                    <Indicator
                        className="w-5/6 md:w-5/12 self-center mt-4 "
                        count={databaseData.pages.length}
                        index={pageIndex}
                    />
                    <h1 className="text-white text-center text-2xl self-center container my-16 px-2 md:px-8 md:text-4xl  ">
                        {pageData.title}
                    </h1>
                    <div className="flex justify-center self-center container ">
                        <ul className=" grid grid-flow-row grid-cols-2  gap-x-8 gap-y-7 md:grid-cols-4 ">
                            {pageData.options.map((data, index) => (
                                <ListCard
                                    key={index}
                                    onClick={() => {
                                        let selectable = true;
                                        if (selected !== []) {
                                            selectable = detectRepeats(
                                                data,
                                                index,
                                            );
                                        }
                                        if (selectable === true) {
                                            if (pageData.amount === 1) {
                                                if (
                                                    selected.indexOf(index) > -1
                                                ) {
                                                    setSelected([]);
                                                } else {
                                                    setSelected([index]);
                                                }
                                            } else {
                                                if (
                                                    selected.indexOf(index) > -1
                                                ) {
                                                    let _selected = selected.slice();
                                                    _selected.splice(
                                                        _selected.indexOf(
                                                            index,
                                                        ),
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
                                        }
                                    }}
                                    icon={data.icon}
                                    name={data.name}
                                    selected={
                                        selected.indexOf(index) > -1
                                            ? true
                                            : false
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                    <BottomButton
                        appearance={pageIndex === 0 ? "hidden" : "visible"}
                        onClick={() => {
                            console.log("clicked");

                            let tempAnswers = [...answers];
                            console.log("answers: " + JSON.stringify(answers));
                            if (answers.length >= pageIndex + 1) {
                                tempAnswers.pop();
                            }
                            setSelected(tempAnswers[tempAnswers.length - 1]);
                            console.log(
                                "new selected: " +
                                    JSON.stringify(
                                        tempAnswers[tempAnswers.length - 1],
                                    ),
                            );

                            let templastRepeats = [...lastRepeats];
                            templastRepeats.pop();
                            setlastRepeats(templastRepeats);
                            setRepeats(
                                templastRepeats[templastRepeats.length - 1],
                            );
                            setpageIndex(pageIndex - 1);
                        }}
                        className="bottom-0 left-0 mb-10 ml-5 md:ml-24 md:mb-20 fixed w-16 h-16 "
                    >
                        <ArrowLeft />
                    </BottomButton>
                    <BottomButton
                        className="bottom-0 right-0 mb-10 mr-5 md:mr-24 md:mb-20 fixed w-16 h-16 "
                        appearance={
                            pageData.amount === selected.length
                                ? "visible"
                                : "hidden"
                        }
                        onClick={() => {
                            setAnswers(lastAnswers);
                            let tempRepeats: interfaceRepeats = { ...repeats };
                            selected.forEach((element) => {
                                let name = pageData.options[element].propName;
                                if (name !== undefined) {
                                    if (tempRepeats[name] !== undefined) {
                                        tempRepeats[name] += 1;
                                    } else {
                                        tempRepeats[name] = 1;
                                    }
                                }
                            });
                            setlastRepeats([...lastRepeats, tempRepeats]);
                            console.log(
                                "last repeats: " +
                                    JSON.stringify([
                                        ...lastRepeats,
                                        tempRepeats,
                                    ]),
                            );

                            setRepeats(tempRepeats);
                            setpageIndex(pageIndex + 1);
                        }}
                    >
                        <ArrowRight />
                    </BottomButton>
                </Container>
            );
        } else {
            return (
                <div className="flex justify-center min-h-screen items-center ">
                    <Loading className="" />
                </div>
            );
        }
    } else {
        return (
            <div className="flex justify-center min-h-screen items-center ">
                <Loading className="" />
            </div>
        );
    }
};

export default Main;
