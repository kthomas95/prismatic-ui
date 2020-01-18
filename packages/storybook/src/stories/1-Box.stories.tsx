import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../button";
import { Box, ThemeProvider, Flex, SiteTheme } from "prismatic-ui/dist";
import { BoxProps } from "prismatic-ui/dist/Box";

export default {
    title: "Layout"
};

const StyledBox: React.FC<BoxProps> = ({ children, ...props }) => (
    <Box
        {...{
            p: 4,
            textAlign: "center",
            boxShadow: 2,
            flexBasis: 300,
            borderRadius: 6,
            bg: "primary.light",
            ...props
        }}
    >
        {children}
    </Box>
);

export const box = () => (
    <>
        <h2>Box</h2>
        <br />
        <StyledBox>This Is A Box</StyledBox>
        <br />
        <StyledBox>This is a box.</StyledBox>
    </>
);

export const flex = () => (
    <div>
        <br />
        <Flex justifyContent="space-around">
            <StyledBox textAlign="center">Hello!</StyledBox>
            <StyledBox>This is a box.</StyledBox>
        </Flex>
    </div>
);

// export const grid = () => <Grid>Test</Grid>;
