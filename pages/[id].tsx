import React from "react";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { Container } from "@components";
import { Google } from "@components/icons";
import firebase, { useAuth } from "@data/firebase";
import { isMobile } from "react-device-detect";

const Home = () => {
    const authcontext = useAuth();
    React.useEffect(() => {
        firebase
            .auth()
            .getRedirectResult()
            .then((response) => {
                if (response.user !== null) {
                    authcontext.setAuth(response);
                    Router.push("/vote/" + Router.query.id);
                }
            });
    }, []);

    return (
        <Container>
            <div className="flex flex-col items-center self-center  ">
                <div className="h-56 w-56 md:h-80 md:w-80 justify-self-center  mt-8  ">
                    <Image
                        src="/res/emsa-gazi.png"
                        height="500px"
                        width="500px"
                    />
                </div>
                <h1 className="text-center text-white text-3xl md:text-5xl md:mt-20 mt-8 font-extralight mx-4 ">
                    EMSA Gazi 21’-22’ Dönemi Seçimleri
                </h1>
            </div>
            <div
                onClick={() => {
                    if (authcontext.auth === false) {
                        if (isMobile === true) {
                            firebase
                                .auth()
                                .signInWithRedirect(
                                    new firebase.auth.GoogleAuthProvider(),
                                );
                        } else {
                            firebase
                                .auth()
                                .signInWithPopup(
                                    new firebase.auth.GoogleAuthProvider(),
                                )
                                .then((response) => {
                                    authcontext.setAuth(response);
                                    Router.push("/vote/" + Router.query.id);
                                });
                        }
                    }
                }}
                className="bg-dark-800 mt-20 select-none cursor-pointer  text-white self-center  flex rounded-md md:rounded-xl items-center h-8 md:h-20 py-6 px-6 mb-12 "
            >
                <Google className="w-8 h-8 md:w-14 md:h-14  " />
                <h1 className="ml-4 text-xl md:text-3xl font-light">
                    Google ile giriş yap
                </h1>
            </div>
        </Container>
    );
};

export default Home;
