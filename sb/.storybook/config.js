import { configure, addDecorator } from "@storybook/react";
import React, { useContext } from "react";
import {
    SiteTheme as theme,
    ThemeModeWrapper,
    ThemeContext,
    InterFont,
    CSSReset,
    Box,
    Button
} from "prismatic-ui";
import { Global } from "@emotion/core";
// automatically import all files ending in *.stories.js
// configure(require.context("../src/stories", true, /\.stories\.tsx$/), module);

const WithToggle = ({ children }) => {
    const { night, toggleNight } = useContext(ThemeContext);
    return (
        <Box bg="neutral.200" color="neutral.700" p={2} minHeight="100%">
            <Button onClick={() => toggleNight()} m={3}>
                {night ? "Night" : "Light"}
            </Button>
            {children}
        </Box>
    );
};

const ThemeDecorator = StoryFn => {
    return (
        <ThemeModeWrapper>
            <WithToggle>
                <CSSReset />
                <Global styles={InterFont} />
                <Global
                    styles={{
                        html: { height: "100%" },
                        body: { height: "100%" },
                        "#root": { height: "100%" }
                    }}
                />
                <StoryFn />
            </WithToggle>
        </ThemeModeWrapper>
        // <div>{storyFn()}</div>
    );
};

addDecorator(ThemeDecorator);
