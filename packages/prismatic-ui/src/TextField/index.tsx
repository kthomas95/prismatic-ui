import React from "react";
import { Box, styled } from "../Box";
import { boxShadow } from "styled-system";

export const TextField = styled(Box)(({ theme }) => ({
    transition: "border-color .5s",
    "&:focus": {
        borderColor: theme.colors["primary"].main,
        boxShadow: theme.shadows[1]
    }
}));

TextField.defaultProps = {
    as: "input",
    px: 2,
    py: 1,
    bg: "background.verylight",
    color: "text.verylight",
    boxShadow: 0,
    border: "solid 1px",
    borderColor: "alpha",
    borderRadius: 3,
    type: "text"
};
