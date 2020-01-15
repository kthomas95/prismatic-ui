import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../button";
import { Box, ThemeProvider, Flex, SiteTheme } from "prismatic-ui/dist";

export default {
    title: "Layout",
    component: Box
};

export const box = () => (
    <ThemeProvider theme={SiteTheme}>
        <Box
            p={4}
            color="grey"
            bg="primary"
            display="flex"
            borderRadius={8}
            boxShadow={3}
        >
            Hello!
        </Box>
        <br />
        <Box bg="secondary">This is a box.</Box>
    </ThemeProvider>
);

export const Emoji = () => (
    <Button onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
