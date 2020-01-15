import React from "react";
import { action } from "@storybook/addon-actions";
import { Box, ThemeProvider, Flex, Button, SiteTheme } from "prismatic-ui/dist";

export default {
    title: "Forms",
    component: Box
};

export const button = () => (
    <ThemeProvider theme={SiteTheme}>
        <h3>Buttons</h3>
        <Button onClick={action("clicked")}>Hello Button</Button>
    </ThemeProvider>
);
