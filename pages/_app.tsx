import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { appWithTranslation } from "@i18n";
import { DataContext } from "@data/datacontext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <DataContext.Provider
                value={{
                    //TODO MAKE THIS DATA COME FROM BACKEND
                    icon: "/res/person-icon.png",
                    name: "test poll",
                    pages: [
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is not for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                                {
                                    name: "test 2",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                        {
                            title: "this is for testing",
                            amount: 1,
                            options: [
                                {
                                    name: "test 1",
                                    icon: "/res/person-icon.png",
                                },
                            ],
                        },
                    ],
                }}
            >
                <Component {...pageProps} />
            </DataContext.Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
