import React, { useState, useContext } from "react";
import { addDecorator } from "@storybook/react";
import {
    ThemeProvider,
    SiteTheme,
    Button,
    Box,
    PrismaticApp,
    ThemeContext,
    IconButton,
    GlobalStyle
} from "prismatic-ui";
import { FiSun, FiMoon } from "react-icons/fi";
import { addParameters } from "@storybook/react";
import { pkmnColors } from "./pkmn-colors";

// addParameters({
//     options: {
//         storySort: (a, b) =>
//             a[1].kind === b[1].kind
//                 ? 0
//                 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
//     }
// });

const ToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <IconButton
            icon={theme === "night" ? FiMoon : FiSun}
            onClick={() => toggleTheme()}
            position="fixed"
            top={0}
            right={0}
            m={2}
            variantColor="background"
        />
    );
};

const ThemeDecorator = StoryFn => {
    return (
        <PrismaticApp
            themes={{
                day: {
                    ...SiteTheme.prismatic.day,
                    colors: {
                        ...SiteTheme.prismatic.day.colors,
                        ...pkmnColors
                    }
                },
                night: {
                    ...SiteTheme.prismatic.night,
                    colors: {
                        ...SiteTheme.prismatic.night.colors,
                        ...pkmnColors
                    }
                }
            }}
            initial="day"
        >
            <GlobalStyle />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}`
                }}
            />
            <ToggleButton />
            <Box px={3} py={5}>
                <StoryFn />
            </Box>
        </PrismaticApp>
    );
};

addDecorator(ThemeDecorator);
