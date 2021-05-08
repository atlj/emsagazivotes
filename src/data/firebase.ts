import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";
import React, { useContext } from "react";

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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

interface AuthObj {
    credential: firebase.auth.AuthCredential;
    user: firebase.User;
}

export type authType = AuthObj | false;
//TODO CHANGE TYPE

export interface interfaceFirebaseContext {
    auth: authType;
    setAuth: any;
}


export const firebaseContext = React.createContext<interfaceFirebaseContext>({
    auth: false,
    setAuth: "",
});

export const useAuth = () => useContext(firebaseContext);

export default firebase;
