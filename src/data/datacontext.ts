import React from "react";

interface option {
    name: string;
    icon: string;
}

interface page {
    title: string;
    amount: number;
    options: Array<option>;
}

interface data {
    name: string;
    icon: string;
    pages: Array<page>;
}

const initData: data = {
    icon: "",
    name: "",
    pages: [{ title: "", amount: 1, options: [{ name: "", icon: "" }] }],
};

const DataContext = React.createContext(initData);

export { DataContext };
