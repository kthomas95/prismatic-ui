import React from "react";
import { Box } from "../box";

interface FlexProps {
    centered?: boolean;
}

export const Flex: Box<FlexProps> = ({ centered = false, ...props }) => (
    <Box
        {...{
            ...(centered
                ? { justifyContent: "center", alignItems: "center" }
                : {}),
            ...props,
        }}
    />
);

const test = () => (
    <>
        <Flex>test</Flex>
    </>
);

Flex.defaultProps = {
    display: "flex",
};

Flex.displayName = "Flex";
