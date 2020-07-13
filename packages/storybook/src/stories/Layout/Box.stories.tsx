import React from "react";
import { Box, PseudoBox } from "prismatic-ui";

export default {
    title: "Layout/Box",
    id: "Layout/Box",
    paramaters: {
        notes: "hi"
    }
    // id: "1"
};

const StyledBox = props => <Box {...props} />;
export const box = () => (
    <>
        <h2>Box</h2>
        <br />
        <StyledBox>This Is A Box</StyledBox>
        <br />
        <StyledBox>This is a box.</StyledBox>
    </>
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
