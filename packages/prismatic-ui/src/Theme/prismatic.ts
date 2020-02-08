import { BaseTheme } from "./base-theme";

const darkGrey = {
    verylight: "hsl(245, 2%, 33%)",
    light: "hsl(245, 2%, 23%)",
    main: "hsl(245, 2%, 14%)",
    dark: "hsl(245, 10%, 3%)"
};

const lightGrey = {
    verylight: "hsl(245, 2%, 99%)",
    light: "hsl(245, 2%, 96%)",
    main: "hsl(245, 2%, 91%)",
    dark: "hsl(245, 2%, 86%)"
};

// const primary = {
//     verylight: "hsl(245, 70%, 76%)",
//     light: "hsl(245, 66%, 72%)",
//     main: "hsl(245, 62%, 65%)",
//     dark: "hsl(245, 57%, 60%)",
//     text: "hsl(245, 85%, 97%)"
// };

const primary = {
    verylight: "hsl(255, 65%, 72%)",
    light: "hsl(255, 53%, 61%)",
    main: "hsl(255, 42%, 50%)",
    dark: "hsl(255, 35%, 40%)",
    text: "hsl(255, 97%, 98%)"
};

const secondary = {
    verylight: "hsl(169, 60%, 55%)",
    light: "hsl(169, 55%, 48%)",
    main: "hsl(169, 45%, 42%)",
    dark: "hsl(169, 55%, 34%)",
    text: "hsl(179, 85%, 97%)"
};

const error = {
    verylight: "hsl(3, 54%, 61%)",
    light: "hsl(3, 51%, 54%)",
    main: "hsl(3, 48%, 44%)",
    dark: "hsl(3, 70%, 20%)",
    text: "hsl(3, 85%, 97%)"
};

const success = {
    verylight: "hsl(139, 57%, 52%)",
    light: "hsl(139, 53%, 46%)",
    main: "hsl(139, 45%, 42%)",
    dark: "hsl(139, 75%, 30%)",
    text: "hsl(129, 85%, 97%)"
};

const danger = {
    verylight: "hsl(22, 70%, 66%)",
    light: "hsl(22, 65%, 58%)",
    main: "hsl(22, 60%, 50%)",
    dark: "hsl(22, 90%, 30%)",
    text: "hsl(22, 85%, 97%)"
};

const warning = {
    verylight: "hsl(54, 92%, 73%)",
    light: "hsl(54, 88%, 61%)",
    main: "hsl(54, 77%, 52%)",
    dark: "hsl(54, 100%, 40%)",
    text: "hsl(54, 95%, 14%)"
};

export default {
    day: {
        ...BaseTheme,
        colors: {
            alpha: "hsla(245, 5%, 20%, .1)",
            primary,
            secondary,
            error,
            success,
            danger,
            warning,
            text: { ...darkGrey, text: lightGrey.main },
            background: { ...lightGrey }
        }
    },
    night: {
        ...BaseTheme,
        colors: {
            alpha: "hsla(245, 5%, 80%, .1)",
            primary,
            secondary,
            error,
            success,
            danger,
            warning,
            text: {
                verylight: lightGrey.dark,
                light: lightGrey.main,
                main: lightGrey.light,
                dark: lightGrey.verylight,
                text: darkGrey.main
            },
            background: darkGrey
        }
    }
};
