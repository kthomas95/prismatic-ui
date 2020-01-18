import { Theme as TP } from "styled-system";

export type Color = {
    main: string;
    light: string;
    dark: string;
    verylight: string;
    text: string;
};

export interface Theme extends TP {
    colors: {
        [index: string]: Color;
    };
}

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
    text: lightGrey.verylight
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

const BaseTheme = {
    shadows: [
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "0 25px 50px -12px rgba(0, 0, 0, 0.25);"
    ]
};

const primary = {
    verylight: "hsla(205, 47%, 70%, 1)",
    light: "hsl(205, 44%, 60%)",
    main: "hsl(205, 40%, 50%)",
    dark: "hsl(205, 38%, 45%)",
    text: lightGrey.verylight
};

const secondary = {
    verylight: "hsl(179, 36%, 77%)",
    light: "hsl(179, 30%, 71%)",
    main: "hsla(179, 25%, 65%, 1)",
    dark: "hsl(179, 23%, 58%)",
    text: darkGrey.dark
};

export const SiteTheme = {
    day: {
        ...BaseTheme,
        colors: {
            primary,
            secondary,
            error,
            warning,
            danger,
            success,
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
            background: { ...darkGrey, text: lightGrey.verylight },
            text: { ...lightGrey, text: darkGrey.dark }
        }
    }
};
