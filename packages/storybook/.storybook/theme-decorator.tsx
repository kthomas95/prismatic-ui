import React from "react";
// import { PrismaticApp, SiteTheme, Box, GlobalStyle } from "prismatic-ui";
import { PrismaticApp, SiteTheme, GlobalStyle } from "prismatic-ui";
import "./inter.css";
const ThemeSet = {
    "nord-light": {
        themes: SiteTheme.nord,
        initial: "day",
    },
    "nord-dark": {
        themes: SiteTheme.nord,
        initial: "night",
    },
    "prismatic-light": {
        themes: SiteTheme.prismatic,
        initial: "day",
    },
    "prismatic-dark": {
        themes: SiteTheme.prismatic,
        initial: "night",
    },
};

export default (StoryFn, globalArgs) => {
    return (
        <PrismaticApp {...ThemeSet[globalArgs.globals.theme]}>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <GlobalStyle />
            {StoryFn()}
        </PrismaticApp>
    );
};
