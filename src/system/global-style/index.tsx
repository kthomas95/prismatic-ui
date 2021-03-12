import { createGlobalStyle } from "styled-components";
import { Theme } from "../themes";

export const GlobalStyle = createGlobalStyle(({ theme }: { theme: Theme }) => ({
    body: {
        backgroundColor: theme.colors?.background[300],
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
    a: {
        textDecoration: "none",
        color: "inherit",
    },
    p: { margin: 0 },
    "h1, h2, h3, h4": {
        marginTop: 0,
        marginBottom: ".5em",
    },
    "h1:only-child,h2:only-child,h3:only-child": {
        marginBottom: 0,
    },
}));
