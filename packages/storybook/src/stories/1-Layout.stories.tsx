import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import {
    Box,
    ThemeProvider,
    Flex,
    SiteTheme,
    Button,
    Grid,
    PseudoBox,
    Drawer,
    Checkbox
} from "prismatic-ui/dist";
import { BoxProps } from "prismatic-ui/dist/Box";

export default {
    title: "Layout",
    id: "1"
};

const StyledBox: React.FC<BoxProps> = ({ children, ...props }) => (
    <Box
        {...{
            p: 4,
            textAlign: "center",
            boxShadow: 2,
            // flexBasis: 300,
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

export const pseudoBox = () => (
    <>
        <PseudoBox
            p={2}
            borderRadius={4}
            color="primary.text"
            _css={{ bg: "primary.light", fontSize: "sm" }}
            _hover={{ bg: "secondary.light" }}
        >
            Test
        </PseudoBox>
    </>
);

export const drawer = () => {
    const [open, setOpen] = useState(false);
    const [direction, setDirection] = useState("top");
    return (
        <Box lineHeight={2}>
            <h3>Drawer</h3>
            <Checkbox
                checked={direction === "left"}
                mr={2}
                onChange={() => setDirection("left")}
            >
                Left
            </Checkbox>
            <Checkbox
                checked={direction === "right"}
                mr={2}
                onChange={() => setDirection("right")}
            >
                Right
            </Checkbox>
            <Checkbox
                checked={direction === "top"}
                mr={2}
                onChange={() => setDirection("top")}
            >
                Top
            </Checkbox>
            <Checkbox
                checked={direction === "bottom"}
                onChange={() => setDirection("bottom")}
            >
                Bottom
            </Checkbox>{" "}
            <br />
            <Button onClick={() => setOpen(!open)} variantColor="primary">
                Open Drawer
            </Button>
            <Drawer
                {...{ open, direction }}
                bg="primary.main"
                color="primary.text"
            >
                {open && (
                    <Box p={2}>
                        <h3>Filter Results</h3>
                        <Button
                            position="absolute"
                            right={0}
                            top={0}
                            width={32}
                            height={32}
                            m={2}
                            variantColor="error"
                            onClick={e => setOpen(!open)}
                        >
                            X
                        </Button>
                    </Box>
                )}
            </Drawer>
        </Box>
    );
};
