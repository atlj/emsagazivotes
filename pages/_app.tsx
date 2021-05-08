import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { appWithTranslation } from "@i18n";
import { firebaseContext, authType } from "@data/firebase";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [auth, setAuth] = React.useState<authType>(false);
    return (
        <>
            <firebaseContext.Provider value={{ auth, setAuth }}>
                <Component {...pageProps} />
            </firebaseContext.Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
