import { createGlobalStyle } from "styled-components";
import { Theme } from "../themes";

export const GlobalStyle = createGlobalStyle(({ theme }: { theme: Theme }) => ({
    body: {
        backgroundColor: theme.colors?.background[700],
        color: theme.colors?.text[900],
        margin: 0,
    },
    "*": {
        boxSizing: "border-box",
    },
    button: {
        outline: "none",
        fontFamily: "inherit",
    },
    input: {
        outline: "none",
    },
    "h4, h5, h6": {
        marginTop: ".5em",
        marginBottom: ".5em",
    },
    "h1, h2, h3": {
        marginTop: "1em",
        marginBottom: "1em",
    },
}));
