import React, { useState } from "react";
import { addDecorator } from "@storybook/react";
import {
    ThemeProvider,
    SiteTheme,
    Button,
    Box,
    GlobalStyle
} from "prismatic-ui/dist";

addDecorator(storyFn => {
    const [theme, setTheme] = useState("day");
    return (
        <ThemeProvider theme={SiteTheme[theme]}>
            <GlobalStyle />
            <Box p={3}>
                <Button
                    mb={4}
                    onClick={() =>
                        setTheme(theme === "night" ? "day" : "night")
                    }
                >
                    {theme === "night" ? "Moon" : "Sun"}
                </Button>
                {storyFn()}
            </Box>
        </ThemeProvider>
    );
});
