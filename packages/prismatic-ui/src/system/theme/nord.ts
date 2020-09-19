import { BaseTheme } from "./base-theme";

interface ColorVariant {
    alpha: {
        light: string;
        medium: string;
        dark: string;
    };
    verylight: string;
    light: string;
    main: string;
    dark: string;
    text: string;
}

const lightGrey = {
    alpha: {
        light: "hsla(218, 27%, 92%, .1)",
        medium: "hsla(218, 27%, 92%, .2)",
        dark: "hsla(218, 27%, 92%, .4)",
    },
    verylight: "hsl(218, 25%, 97%)",
    light: "hsl(218, 27%, 94%)",
    main: "hsl(218, 27%, 92%)",
    dark: "hsl(218, 28%, 88%)",
};

const darkGrey = {
    alpha: {
        light: "hsla(222, 16%, 28%, .1)",
        medium: "hsla(222, 16%, 28%, .2)",
        dark: "hsla(222, 16%, 28%, .4)",
    },
    verylight: "hsl(220, 16%, 36%)",
    light: "hsl(220, 17%, 32%)",
    main: "hsl(222, 16%, 28%)",
    dark: "hsl(220, 16%, 22%)",
};

const day = {
    text: { ...darkGrey, text: lightGrey.verylight },
    background: { ...lightGrey, text: darkGrey.dark },
};

const background = {
    background: { ...darkGrey, text: lightGrey.verylight },
    text: { ...lightGrey, text: darkGrey.dark },
};

const error = {
    alpha: {
        light: "hsla(354, 42%, 56%, .1)",
        medium: "hsla(354, 42%, 56%, .2)",
        dark: "hsla(354, 42%, 56%, .5)",
    },
    verylight: "hsl(354, 54%, 70%)",
    light: "hsl(354, 48%, 63%)",
    main: "hsla(354, 42%, 56%, 1)",
    dark: "hsl(354, 36%, 49%)",
    text: "hsl(354, 57%, 10%)",
    // text: lightGrey.verylight
};

const danger = {
    alpha: {
        light: "hsla(14, 51%, 63%, .1)",
        medium: "hsla(14, 51%, 63%, .2)",
        dark: "hsla(14, 51%, 60%, .45)",
    },
    verylight: "hsl(14, 60%, 73%)",
    light: "hsl(14, 55%, 67%)",
    main: "hsla(14, 51%, 63%, 1)",
    dark: "hsl(14, 45%, 57%)",
    text: darkGrey.dark,
};

const warning = {
    alpha: {
        light: "hsla(40, 71%, 73%, .1)",
        medium: "hsla(40, 71%, 73%, .2)",
        dark: "hsla(40, 40%, 63%, .35)",
    },
    verylight: "hsl(40, 82%, 85%)",
    light: "hsl(40, 76%, 78%)",
    main: "hsla(40, 71%, 73%, 1)",
    dark: "hsl(40, 64%, 66%)",
    text: darkGrey.dark,
};

const success = {
    alpha: {
        light: "hsla(92, 28%, 65%, .1)",
        medium: "hsla(92, 28%, 65%, .2)",
        dark: "hsla(92, 26%, 60%, .35)",
    },
    verylight: "hsl(92, 39%, 77%)",
    light: "hsl(92, 33%, 71%)",
    main: "hsla(92, 28%, 65%, 1)",
    dark: "hsl(92, 23%, 58%)",
    text: darkGrey.dark,
};

const primary = {
    alpha: {
        light: "hsla(205, 47%, 65%, .1)",
        medium: "hsla(205, 47%, 65%, .2)",
        dark: "hsla(205, 44%, 60%, .35)",
    },
    verylight: "hsla(205, 47%, 65%, 1)",
    light: "hsl(205, 44%, 60%)",
    main: "hsl(205, 40%, 50%)",
    dark: "hsl(205, 38%, 45%)",
    text: "hsl(205, 95%, 15%)",
};

const secondary = {
    alpha: {
        light: "hsla(179, 25%, 65%, .1)",
        medium: "hsla(179, 25%, 65%, .2)",
        dark: "hsla(179, 25%, 65%, .3)",
    },
    verylight: "hsl(179, 36%, 77%)",
    light: "hsl(179, 30%, 71%)",
    main: "hsla(179, 25%, 65%, 1)",
    dark: "hsl(179, 23%, 58%)",
    text: "hsl(179, 10%, 20%)",
    // text: darkGrey.dark
};

const NaturalColors = { primary, secondary, error, warning, danger, success };

export default {
    day: {
        ...BaseTheme,
        colors: {
            ...NaturalColors,
            ...day,
        },
    },
    night: {
        ...BaseTheme,
        colors: {
            ...NaturalColors,
            ...background,
        },
    },
};
