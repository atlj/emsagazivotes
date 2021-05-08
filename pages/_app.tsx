import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { appWithTranslation } from "@i18n";
import { DataContext } from "@data/datacontext";
import { FirebaseAppProvider } from "reactfire";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const firebaseConfig = {
        apiKey: "AIzaSyD8d9_jFxFqLcCd63GonhHjpNmvgmhkYyc",
        authDomain: "emsa-gazi-votes.firebaseapp.com",
        databaseURL:
            "https://emsa-gazi-votes-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "emsa-gazi-votes",
        storageBucket: "emsa-gazi-votes.appspot.com",
        messagingSenderId: "49758157570",
        appId: "1:49758157570:web:1b6257d65f9defa96ae01b",
        measurementId: "G-7G96TE5ZSR",
    };
    return (
        <>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
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
            </FirebaseAppProvider>
        </>
    );
}

export default appWithTranslation(MyApp);
