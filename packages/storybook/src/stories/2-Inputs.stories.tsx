import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import {
    Box,
    ThemeProvider,
    Flex,
    Button,
    SiteTheme,
    Heading,
    Checkbox,
    Message,
    TextField,
    Grid
} from "prismatic-ui/dist";

export default {
    title: "Inputs",
    id: "2"
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

const ControlledCheckbox = ({ ...props }) => {
    const [check1, setCheck1] = useState(true);
    return (
        <Checkbox
            checked={check1}
            onChange={() => setCheck1(!check1)}
            {...props}
        >
            {check1 ? "Checked" : "An Unchecked Checkbox"} Checkbox
        </Checkbox>
    );
};

export const checkbox = () => {
    return (
        <>
            <Heading>Checkbox</Heading>
            <Grid
                gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
                gridGap={2}
            >
                {buttons.map(color => (
                    <ControlledCheckbox variantColor={color} />
                ))}
            </Grid>
        </>
    );
};

export const textField = () => {
    return (
        <>
            <TextField />
        </>
    );
};

export const button = () => (
    <>
        <h3>Buttons</h3>
        <Grid gridAutoColumns={"max-content"} gridAutoFlow="column" gridGap={2}>
            {buttons.map(color => (
                <Button variantColor={color} as="a">
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
    </>
);
