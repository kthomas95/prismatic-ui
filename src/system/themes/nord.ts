import { BaseTheme } from "./base-theme";
import { Color } from "./theme";
import { invertColor } from "./utils";

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

const lightGrey: Color = {
    100: "hsl(218, 25%, 97%)",
    300: "hsl(218, 27%, 94%)",
    500: "hsl(218, 27%, 92%)",
    700: "hsl(218, 28%, 88%)",
    900: "hsl(218, 26%, 85%)", // NOT 900
    a50: "hsla(218, 27%, 92%, .1)",
    a100: "hsla(218, 27%, 92%, .2)",
    text: "black",
};

const darkGrey = {
    100: "hsl(220, 16%, 48%)",
    300: "hsl(220, 17%, 38%)",
    500: "hsl(222, 16%, 30%)",
    700: "hsl(220, 16%, 24%)",
    900: "hsl(220, 15%, 18%)", // NOT 900
    a50: "hsla(222, 16%, 28%, .05)",
    a100: "hsla(222, 16%, 28%, .1)",
    text: lightGrey[300],
};

const day = {
    text: { ...darkGrey },
    background: { ...lightGrey },
};

const night = {
    background: { ...darkGrey },
    text: invertColor(lightGrey),
};

const error: Color = {
    100: "hsl(354, 54%, 70%)",
    300: "hsl(354, 48%, 63%)",
    500: "hsla(354, 42%, 56%, 1)",
    700: "hsl(354, 36%, 49%)",
    900: "hsl(354, 29%, 35%)",
    text: darkGrey[700],
    a50: "hsla(354, 42%, 56%, .125)",
    a100: "hsla(354, 42%, 56%, .25)",
};

const danger: Color = {
    100: "hsl(14, 60%, 73%)",
    300: "hsl(14, 55%, 67%)",
    500: "hsla(14, 51%, 63%, 1)",
    700: "hsl(14, 45%, 57%)",
    900: "hsl(14, 40%, 45%)",
    text: darkGrey[700],
    a50: "hsla(14, 51%, 63%, .125)",
    a100: "hsla(14, 51%, 63%, .25)",
};

const warning: Color = {
    // alpha: {
    //     light: "hsla(40, 71%, 73%, .1)",
    //     medium: "hsla(40, 71%, 73%, .2)",
    //     dark: "hsla(40, 40%, 63%, .35)",
    // },
    100: "hsl(40, 82%, 85%)",
    300: "hsl(40, 76%, 78%)",
    500: "hsla(40, 71%, 73%, 1)",
    700: "hsl(40, 64%, 66%)",
    900: "hsl(40, 54%, 56%)",
    a50: "hsla(40, 71%, 73%, .125)",
    a100: "hsla(40, 71%, 73%, .25)",
    text: darkGrey[700],
};

const success: Color = {
    // alpha: {
    //     light: "hsla(92, 28%, 65%, .1)",
    //     medium: "hsla(92, 28%, 65%, .2)",
    //     dark: "hsla(92, 26%, 60%, .35)",
    // },
    100: "hsl(92, 39%, 77%)",
    300: "hsl(92, 33%, 71%)",
    500: "hsla(92, 28%, 65%, 1)",
    700: "hsl(92, 23%, 58%)",
    900: "hsl(92, 20%, 48%)",
    a50: "hsla(92, 28%, 65%, .125)",
    a100: "hsla(92, 28%, 65%, .25)",
    text: darkGrey[700],
};

const primary: Color = {
    // alpha: {
    //     light: "hsla(205, 47%, 65%, .1)",
    //     medium: "hsla(205, 47%, 65%, .2)",
    //     dark: "hsla(205, 44%, 60%, .35)",
    // },
    100: "hsla(205, 47%, 65%, 1)",
    300: "hsl(205, 44%, 60%)",
    500: "hsl(205, 40%, 50%)",
    700: "hsl(205, 38%, 45%)",
    900: "hsl(205, 28%, 35%)", // NOT 900
    a50: "hsla(205, 40%, 50%, .125)",
    a100: "hsla(205, 40%, 50%, .25)",
    text: darkGrey[900],
};

const secondary: Color = {
    // alpha: {
    //     light: "hsla(179, 25%, 65%, .1)",
    //     medium: "hsla(179, 25%, 65%, .2)",
    //     dark: "hsla(179, 25%, 65%, .3)",
    // },
    100: "hsl(179, 36%, 77%)",
    300: "hsl(179, 30%, 71%)",
    500: "hsla(179, 25%, 65%, 1)",
    700: "hsl(179, 23%, 58%)",
    900: "hsl(179, 18%, 47%)",
    a50: "hsla(179, 25%, 65%, .125)",
    a100: "hsla(179, 25%, 65%, .25)",
    text: darkGrey[700],
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
            ...night,
        },
    },
};
