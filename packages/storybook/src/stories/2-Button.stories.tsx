import React from "react";
import { action } from "@storybook/addon-actions";
import {
    Box,
    ThemeProvider,
    Flex,
    Button,
    SiteTheme,
    Message,
    Grid
} from "prismatic-ui/dist";

export default {
    title: "Inputs",
    component: Box
};

const buttons = [
    "primary",
    "secondary",
    "background",
    "text",
    "error",
    "danger",
    "warning",
    "success"
];

export const button = () => (
    <ThemeProvider theme={SiteTheme}>
        <h3>Buttons</h3>
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {buttons.map(color => (
                <Button variantColor={color}>
                    {color[0].toUpperCase() + color.slice(1)}
                </Button>
            ))}
        </Grid>
        <br />
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {buttons.map(color => (
                <Button variantColor={color} variant="outline">
                    {color[0].toUpperCase() + color.slice(1)}
                </Button>
            ))}
        </Grid>
    </ThemeProvider>
);
