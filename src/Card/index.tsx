import React, { forwardRef } from "react";
import styled, { StyledComponent } from "@emotion/styled";
import Flex from "../layout/flex";
import Box from "../Box";
import { BoxProps } from "../Box";

interface CardProps {
    name: string;
}

export const Card: React.FC<BoxProps & CardProps> = styled(Flex)();
Card.defaultProps = {
    // boxShadow: "lg",
    borderRadius: 2,

    p: 2,
    color: "neutral.700",
    bg: "neutral.300",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column"
};
