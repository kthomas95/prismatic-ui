import React from "react";
import { Global } from "@emotion/core";
import { createGlobalStyle } from "styled-components";
import { Theme } from "../theme";

export const GlobalStylee = () => (
    <Global
        styles={(theme) => ({
            "h1, h2, h3, h4, h5, h6, hr": {
                margin: ".5em 0",
                // marginBottom: ".5em"
            },
            "*": {
                "box-sizing": "border-box",
            },
            body: {
                margin: 0,
                color: theme.colors.text.main,
                backgroundColor: theme.colors.background.dark,
            },
            hr: {
                color: theme.colors.alpha,
            },
            button: {
                fontFamily: "inherit",
                color: "inherit",
                outline: "none",
            },
        })}
    />
);

export const GlobalStyle = createGlobalStyle(({ theme }: { theme: Theme }) => ({
    body: {
        backgroundColor: theme.colors.background.main,
        color: theme.colors.text.main,
    },
}));