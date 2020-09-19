import React from "react";
import { Box } from "../../primatives";

interface FlexProps {}

export const Flex: Box<FlexProps> = ({ ...props }) => <Box {...props} />;

const test = () => (
    <>
        <Flex>test</Flex>
    </>
);

Flex.defaultProps = {
    display: "flex",
};
