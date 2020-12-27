import React from "react";
import { ColorVariant } from "..";
import { Box } from "../box";
interface MessageProps {
    variantColor?: ColorVariant;
}

export const Message: Box<MessageProps> = ({
    variantColor = "primary",
    ...props
}) => (
    <Box
        {...({
            color: `${variantColor}.text`,
            bg: `${variantColor}.100`,
            borderColor: `${variantColor}.500`,

            ...props,
        } as const)}
    />
);

Message.defaultProps = {
    p: 3,
    lineHeight: 1.25,
    boxShadow: "md",
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
};
