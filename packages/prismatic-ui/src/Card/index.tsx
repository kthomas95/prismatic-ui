import React from "react";

import { Box, styled } from "../Box";

export const Card = ({ ...props }) => <Box {...props} />;

Card.defaultProps = {
    boxShadow: 2,
    borderRadius: 4,
    p: 3,
    bg: "background.light",
    textAlign: "center"
};
