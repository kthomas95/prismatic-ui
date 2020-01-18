import React from "react";
import { Global } from "@emotion/core";

export const GlobalStyle = () => (
    <Global
        styles={theme => ({
            "h1, h2, h3, h4, h5, h6": {
                margin: 0
            },
            "*": {
                "box-sizing": "border-box"
            },
            body: {
                margin: 0,
                color: theme.colors.text.dark,
                backgroundColor: theme.colors.background.light
            }
        })}
    />
);