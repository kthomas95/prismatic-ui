import React from "react";
import { Box, Flex, Grid, Heading } from "prismatic-ui";
export default {
    title: "Layout"
};

const boxProps = {
    p: 4,
    m: 2,
    bg: "blue.300",
    color: "gray.800",
    boxShadow: 2
};

const boxItems = (
    <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
    </>
);

export const box = () => (
    <>
        <h2>Box</h2>
        <Box {...boxProps}>A Basic Box</Box>
    </>
);

export const heading = () => (
    <>
        <Heading level={1}>Test</Heading>
        <Heading level={2}>Test</Heading>
        <Heading level={5}>Test</Heading>
    </>
);

export const flex = () => (
    <>
        <h2>Flex</h2>
        <Flex {...boxProps} justifyContent="space-around">
            {boxItems}
        </Flex>
    </>
);

export const grid = () => (
    <>
        <h2>Grid</h2>
        <Grid {...boxProps} gridTemplateColumns="2fr 1fr 1fr">
            {boxItems}
        </Grid>
    </>
);
