import { CSSObject } from "@styled-system/css";
import { ComponentProps } from "react";
import styled, { ThemedStyledFunction } from "styled-components";
import { Box, Flex } from "..";
export default {
    title: "Layout",
};

export const box = () => (
    <Box
        _css={{
            bg: "primary.100",
            color: "primary.text",
            px: 3,
            py: 1,
            boxShadow: "md",
            borderRadius: 2,
        }}
        as="s"
    >
        <h2>Box</h2>
    </Box>
);
export const flex = () => (
    <Flex
        _css={{
            m: 2,
            boxShadow: "sm",
            borderRadius: 3,
            flexDirection: "column",
            // color: "danger.text",
        }}
    >
        <Box
            as="h4"
            _css={{
                bg: "success.300",
                m: 0,
                p: 3,
                fontWeight: 800,
                fontSize: "lg",
                // letterSpacing: "-.0125em",
                borderTopRightRadius: 3,
                borderTopLeftRadius: 3,
            }}
        >
            Title
        </Box>
        <Box
            _css={{
                pt: 4,
                px: 3,
                fontStyle: "italic",
                fontSize: "xl",
                fontWeight: 400,
                letterSpacing: "-.05em",
            }}
        >
            Heading
        </Box>
        <Box
            _css={{
                p: 3,
                fontWeight: 300,
                fontSize: "sm",
                letterSpacing: "-.025em",
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Box>
    </Flex>
);
