module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    mode: "jit",
    theme: {
        extend: {
            colors: {
                accent: "#836FFF",
                dark: {
                    800: "#1E1E1E",
                    900: "#121212",
                },
            },
            fontFamily: {
                sans: ["Work Sans"],
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
};
