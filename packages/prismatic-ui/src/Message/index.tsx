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
            color: `${variantColor}.text`,
            bg: `${variantColor}.light`,
            borderColor: `${variantColor}.dark`,
            ...props
        }}
    />
);

Message.defaultProps = {
    p: 3,
    lineHeight: 1.25,
    boxShadow: 2,
    borderLeftWidth: "4px",
    borderLeftStyle: "solid",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
};
