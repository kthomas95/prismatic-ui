import React from "react";
// import { PrismaticApp, SiteTheme, Box, GlobalStyle } from "prismatic-ui";
import {
    PrismaticApp,
    GlobalStyle,
    ThemeVariant,
    SiteTheme
} from "prismatic-ui";
import "./inter.css";
const ThemeSet: Record<string, ThemeVariant> = {
    "nord-light": {
        mode: "day",
        variant: "nord",
    },
    "nord-dark": {
        mode: "night",
        variant: "nord",
    },
    "prismatic-light": {
        mode: "day",
        variant: "prismatic",
    },
    "prismatic-dark": {
        mode: "night",
        variant: "prismatic",
    },
    "tailwind-light": {
        mode: "day",
        variant: "tailwind"
    },
    "tailwind-dark": {
        mode: "night",
        variant: "tailwind"
    }
};

export default (StoryFn, globalArgs) => {
    return (
        <PrismaticApp
            themes={{
                nord: SiteTheme.Nord,
                prismatic: SiteTheme.Prismatic,
                tailwind: SiteTheme.Tailwind
            }}
            initial={ThemeSet[globalArgs.globals.theme]}
            key={globalArgs.globals.theme}
        >
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <GlobalStyle />
            {StoryFn()}
        </PrismaticApp>
    );
};
