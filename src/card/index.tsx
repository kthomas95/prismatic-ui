import { CSSObject } from "@styled-system/css";
import React, { ReactText } from "react";

import { Box } from "../";

const defaultCardStyles: CSSObject = {
    boxShadow: "md",
    borderRadius: 4,
    p: 3,
};

export const Card: Box = ({ _css, ...props }) => (
    <Box _css={{ ...defaultCardStyles, ..._css }} {...props} />
);
