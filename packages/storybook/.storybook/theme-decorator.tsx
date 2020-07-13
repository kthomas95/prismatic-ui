import React from "react";
import { PrismaticApp, SiteTheme, Box, GlobalStyle } from "prismatic-ui";

const ThemeSet = {
    "nord-light": {
        themes: SiteTheme.nord, initial: "day"
    },
    "nord-dark": {
        themes: SiteTheme.nord, initial: "night"
    },
    "prismatic-light": {
        themes: SiteTheme.prismatic, initial: "day"
    },
    "prismatic-dark": {
        themes: SiteTheme.prismatic, initial: "night"
    },
}

export default (StoryFn, globalArgs) => {
    return <PrismaticApp {...ThemeSet[globalArgs.globals.theme]}>
        <Box height="100vh" m="-1rem" p={3}>
            <GlobalStyle />

            <StoryFn />
        </Box>
    </PrismaticApp>
};