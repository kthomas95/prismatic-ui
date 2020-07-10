import React from "react";
import { Flex, Box } from "prismatic-ui/dist";

export default {
    title: "Layout"
};

const StyledBox = props => (
    <Box
        bg="background.light"
        p={4}
        borderRadius={4}
        boxShadow={2}
        {...props}
    />
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
