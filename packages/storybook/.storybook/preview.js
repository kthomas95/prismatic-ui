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
} from "prismatic-ui/dist";
import { FiSun, FiMoon } from "../../prismatic-ui/node_modules/react-icons/fi";
import { addParameters } from "@storybook/react";

addParameters({
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
    }
});

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

const pkmnColors = {
    Fire: {
        verylight: "hsl(13, 72%, 60%)",
        light: "hsl(13, 70%, 52%)",
        main: "hsl(13, 60%, 45%)",
        dark: "hsl(13, 35%, 35%)",
        text: "hsl(13, 20%, 95%)"
    },
    Fighting: {
        verylight: "hsl(30, 50%, 36%)",
        light: "hsl(30, 35%, 25%)",
        main: "hsl(30, 35%, 25%)",
        dark: "hsl(30, 30%, 20%)",
        text: "hsl(30, 20%, 95%)"
    },
    Psychic: {
        verylight: "hsl(288, 30%, 60%)",
        light: "hsl(288, 27%, 53%)",
        main: "hsl(288, 25%, 43%)",
        dark: "hsl(288, 20%, 24%)",
        text: "hsl(288, 20%, 95%)"
    },
    Grass: {
        verylight: "hsl(97, 53%, 47%)",
        light: "hsl(97, 50%, 45%)",
        main: "hsl(97, 45%, 40%)",
        dark: "hsl(97, 30%, 25%)",
        text: "hsl(97, 20%, 95%)"
    },
    Water: {
        verylight: "hsl(197, 70%, 50%)",
        light: "hsl(197, 65%, 47%)",
        main: "hsl(197, 60%, 43%)",
        dark: "hsl(197, 60%, 35%)",
        text: "hsl(197, 20%, 95%)"
    },
    Fairy: {
        verylight: "hsl(335, 62%, 60%)",
        light: "hsl(335, 60%, 54%)",
        main: "hsl(335, 55%, 45%)",
        dark: "hsl(335, 30%, 35%)",
        text: "hsl(335, 20%, 95%)"
    },
    Lightning: {
        verylight: "hsl(45, 60%, 65%)",
        light: "hsl(51, 98%, 60%)",
        main: "hsl(51, 94%, 52%)",
        dark: "hsl(51, 98%, 40%)",
        text: "hsl(51, 10%, 15%)"
    },
    Metal: {
        verylight: "hsl(212, 5%, 55%)",
        light: "hsl(212, 5%, 45%)",
        main: "hsl(212, 5%, 35%)",
        dark: "hsl(212, 3%, 30%)",
        text: "hsl(212, 20%, 95%)"
    },
    Dragon: {
        verylight: "hsl(55, 35%, 35%)",
        light: "hsl(55, 36%, 25%)",
        main: "hsl(55, 30%, 20%)",
        dark: "hsl(55, 60%, 15%)",
        text: "hsl(55, 20%, 95%)"
    },
    Darkness: {
        verylight: "hsl(189, 5%, 40%)",
        light: "hsl(189, 5%, 27%)",
        main: "hsl(189, 5%, 24%)",
        dark: "hsl(189, 5%, 20%)",
        text: "hsl(189, 20%, 95%)"
    },
    Colorless: {
        verylight: "hsl(189, 35%, 90%)",
        light: "hsl(189, 35%, 90%)",
        main: "hsl(189, 15%, 90%)",
        dark: "hsl(189, 35%, 90%)",
        text: "hsl(189, 5%, 30%)"
    }
};

const ThemeDecorator = StoryFn => {
    return (
        <PrismaticApp
            themes={{
                day: {
                    ...SiteTheme.prismatic.day,
                    colors: { ...SiteTheme.prismatic.day.colors, ...pkmnColors }
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
