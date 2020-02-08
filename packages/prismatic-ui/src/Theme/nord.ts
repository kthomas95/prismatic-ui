import { BaseTheme } from "./base-theme";

const lightGrey = {
    verylight: "hsl(218, 25%, 97%)",
    light: "hsl(218, 27%, 94%)",
    main: "hsl(218, 27%, 92%)",
    dark: "hsl(218, 28%, 88%)"
};

const darkGrey = {
    verylight: "hsl(220, 16%, 36%)",
    light: "hsl(220, 17%, 32%)",
    main: "hsl(222, 16%, 28%)",
    dark: "hsl(220, 16%, 22%)"
};

const error = {
    verylight: "hsl(354, 54%, 70%)",
    light: "hsl(354, 48%, 63%)",
    main: "hsla(354, 42%, 56%, 1)",
    dark: "hsl(354, 36%, 49%)",
    text: "hsl(354, 17%, 20%)"
    // text: lightGrey.verylight
};

const danger = {
    verylight: "hsl(14, 60%, 73%)",
    light: "hsl(14, 55%, 67%)",
    main: "hsla(14, 51%, 63%, 1)",
    dark: "hsl(14, 45%, 57%)",
    text: darkGrey.dark
};

const warning = {
    verylight: "hsl(40, 82%, 85%)",
    light: "hsl(40, 76%, 78%)",
    main: "hsla(40, 71%, 73%, 1)",
    dark: "hsl(40, 64%, 66%)",
    text: darkGrey.dark
};

const success = {
    verylight: "hsl(92, 39%, 77%)",
    light: "hsl(92, 33%, 71%)",
    main: "hsla(92, 28%, 65%, 1)",
    dark: "hsl(92, 23%, 58%)",
    text: darkGrey.dark
};

const primary = {
    verylight: "hsla(205, 47%, 65%, 1)",
    light: "hsl(205, 44%, 60%)",
    main: "hsl(205, 40%, 50%)",
    dark: "hsl(205, 38%, 45%)",
    text: "hsl(205, 95%, 15%)"
    // text: "hsl(190, 90%, 98%)"
    // text: lightGrey.verylight
};

const secondary = {
    verylight: "hsl(179, 36%, 77%)",
    light: "hsl(179, 30%, 71%)",
    main: "hsla(179, 25%, 65%, 1)",
    dark: "hsl(179, 23%, 58%)",
    text: "hsl(179, 10%, 20%)"
    // text: darkGrey.dark
};

export default {
    day: {
        ...BaseTheme,
        colors: {
            primary,
            secondary,
            error,
            warning,
            danger,
            success,
            // alpha: "hsla(220, 16%, 36%, .4)",
            text: { ...darkGrey, text: lightGrey.verylight },
            background: { ...lightGrey, text: darkGrey.dark }
        }
    },
    night: {
        ...BaseTheme,
        colors: {
            primary,
            secondary,
            error,
            warning,
            danger,
            success,
            alpha: "hsla(218, 25%, 97%, .3)",
            background: { ...darkGrey, text: lightGrey.verylight },
            text: { ...lightGrey, text: darkGrey.dark }
        }
    }
};
