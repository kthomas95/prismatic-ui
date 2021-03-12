import React from "react";
import { Box } from "../box";

export const Grid: Box = ({ _css, ...props }) => (
    <Box _css={{ display: "grid", ..._css }} {...props} />
);
