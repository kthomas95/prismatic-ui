import React, { useState, useContext } from "react";
import { action } from "@storybook/addon-actions";
import {
    Button,
    Grid,
    Box,
    TextField,
    Checkbox,
    Input,
    CheckButton,
    ThemeContext
} from "prismatic-ui";
import { addDecorator } from "@storybook/react";

export default {
    title: "Input"
};

const offsets = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "neutral"
];

export const textfield = () => (
    <>
        <h3>Text Field</h3>
        <Input />
    </>
);

export const checkbox = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    return (
        <>
            <h3>Checkbox</h3>
            <Box fontSize={2} color="neutral.600">
                <Checkbox
                    variantColor="green"
                    id="checkbox"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                >
                    Checkbox
                </Checkbox>
            </Box>
            <h3>Check Button</h3>
            <CheckButton
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                colors="purple"
                mr={2}
            >
                Toggle Me! {`(${checked2 ? "T" : "F"})`}
            </CheckButton>
            <CheckButton
                checked={checked3}
                onChange={() => setChecked3(!checked3)}
                colors={checked3 ? "green" : "red"}
            >
                Toggle Me! {`(${checked3 ? "T" : "F"})`}
            </CheckButton>
        </>
    );
};

export const button = () => {
    return (
        <Box>
            <h3>Solid Buttons</h3>
            <Grid gridTemplateColumns="repeat(9, 1fr)" gridGap={2}>
                {offsets.reverse().map(offset => (
                    <>
                        <strong>Offset: {offset}</strong>
                        {colors.map(color => (
                            <Button
                                key={color}
                                colors={color}
                                colorOffset={offset}
                            >
                                Solid Button
                            </Button>
                        ))}
                    </>
                ))}
            </Grid>
            <h3>Outline Buttons</h3>
            <Grid gridTemplateColumns={"repeat(8, 1fr)"} gridGap={2}>
                {colors.map(color => (
                    <Button key={color} colors={color} outline>
                        Outline Button
                    </Button>
                ))}
            </Grid>
        </Box>
    );
};