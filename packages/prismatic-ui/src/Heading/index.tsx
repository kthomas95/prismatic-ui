import React from "react";
import { Box } from "../Box";

export const Heading = ({ children, ...rest }) => (
    <Box {...rest}>{children}</Box>
);

Heading.defaultProps = {
    as: "h3"
};
