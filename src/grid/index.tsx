import React from "react";
import { Box } from "../box";

export const Grid: Box = ({ ...props }) => <Box {...props} />;

Grid.defaultProps = {
    display: "grid",
};
