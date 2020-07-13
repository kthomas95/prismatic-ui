import React from "react";
import { Box, styled, BoxProps } from "../Box";

interface MessageProps {
    variantColor?: string;
}

export const Message: React.FC<BoxProps & MessageProps> = ({
    variantColor = "primary",
    ...props
}) => (
    <Box
        {...{
            color: `${variantColor}.dark`,
            bg: `${variantColor}.verylight`,
            borderColor: `${variantColor}.main`,
            ...props
        }}
    />
);

Message.defaultProps = {
    p: 3,
    lineHeight: 1.25,
    boxShadow: 2,
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
};
