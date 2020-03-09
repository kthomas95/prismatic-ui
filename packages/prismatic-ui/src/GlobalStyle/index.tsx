import React from "react";
import { Global } from "@emotion/core";

export const GlobalStyle = () => (
    <Global
        styles={theme => ({
            "h1, h2, h3, h4, h5, h6, hr": {
                margin: ".5em 0"
                // marginBottom: ".5em"
            },
            "*": {
                "box-sizing": "border-box"
            },
            body: {
                margin: 0,
                color: theme.colors.text.main,
                backgroundColor: theme.colors.background.dark
            },
            hr: {
                color: theme.colors.alpha
            },
            button: {
                fontFamily: "inherit",
                color: "inherit"
            }
        })}
    />
);
