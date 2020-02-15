import React from "react";
import { Global } from "@emotion/core";

export const GlobalStyle = () => (
    <Global
        styles={theme => ({
            "h1, h2, h3, h4, h5, h6, hr": {
                margin: "0 0 .33em 0"
                // marginBottom: ".5em"
            },
            "*": {
                "box-sizing": "border-box"
            },
            body: {
                margin: 0,
                color: theme.colors.text.main,
                backgroundColor: theme.colors.background.main
            },
            hr: {
                color: theme.colors.alpha
            }
        })}
    />
);
