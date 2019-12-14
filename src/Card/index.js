import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import Flex from "../layout/flex";

export const Card = styled(Flex)();

Card.defaultProps = {
    boxShadow: "lg",
    borderRadius: 2,
    p: 2,
    color: "neutral.700",
    bg: "neutral.100",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column"
};
