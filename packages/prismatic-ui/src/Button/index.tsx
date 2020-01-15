import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { Flex } from "../Flex";
import { Theme, backgroundColor } from "styled-system";

export const Button = styled(Flex)(({ theme, variant }) => ({
    backgroundColor: theme.colors["primary"],
    "&:hover": {
        backgroundColor: theme.colors["secondary"]
    }
}));

Button.defaultProps = {
    as: "button",
    p: 2,
    borderRadius: 2,
    border: 0,
    variant: "primary"
};
