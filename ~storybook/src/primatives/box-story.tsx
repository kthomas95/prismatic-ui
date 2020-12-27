import React from "react";
import { Box, PseudoBox } from "prismatic-ui";

export default {
    title: "Layout",
    id: "Layout",
    // id: "1"
};

const StyledBox: Box = ({ ...props }) => <Box {...props} />;

StyledBox.defaultProps = {
    bg: "primary.main",
};

export const box = () => (
    <>
        <h2>Box!</h2>
        <br />
        <Box bg="primary.main" boxShadow={"lg"} p={2} m={3}>
            test
        </Box>
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
            bg="primary.main"
            _css={{ bg: "primary.light", fontSize: "sm" }}
            _hover={{ bg: "secondary.light" }}
        >
            Test
        </PseudoBox>
    </>
);
