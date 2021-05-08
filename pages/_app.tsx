import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { appWithTranslation } from "@i18n";
import { firebaseContext, authType } from "@data/firebase";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [auth, setAuth] = React.useState<authType>(false);
    return (
        <>
            <Head>
                <title>Emsa Gazi Votes</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/res/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/res/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/res/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/res/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/res/favicon/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <link rel="shortcut icon" href="/res/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta
                    name="msapplication-config"
                    content="/res/favicon/browserconfig.xml"
                />
                <meta name="theme-color" content="#030f95" />
                <meta
                    property="og:title"
                    content="Emsa Gazi Votes"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="EMSA Gazi official voting system."
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://emsagazivotes.vercel.app/res/emsa-gazi.png"
                    key="image"
                />
                <meta
                    property="url"
                    content="emsagazivotes.vercel.app"
                    key="url"
                />
            </Head>
            <firebaseContext.Provider value={{ auth, setAuth }}>
                <Component {...pageProps} />
            </firebaseContext.Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
