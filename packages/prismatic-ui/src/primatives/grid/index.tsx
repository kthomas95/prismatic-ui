import { Box } from "../../primatives";
import React from "react";

export const Grid: Box = ({ ...props }) => <Box {...props} />;

Grid.defaultProps = {
    display: "grid",
};
