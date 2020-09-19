import React from "react";
import { Box } from "../../primatives";

export const Heading = ({ children, ...rest }) => (
    <Box {...rest}>{children}</Box>
);

Heading.defaultProps = {
    as: "h3",
};
