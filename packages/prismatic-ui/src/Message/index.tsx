import React from "react";
import { Box, styled, BoxProps } from "../Box";

interface MessageProps {
    variantColor?: string;
}

export const Message = styled(Box)<MessageProps & BoxProps>(
    ({ theme, variantColor = "primary", ...props }) => ({
        borderColor: theme.colors[variantColor].dark,
        color: props.color || theme.colors[variantColor].text,
        backgroundColor: theme.colors[variantColor].verylight,
        borderLeftWidth: "4px",
        borderLeftStyle: "solid"
    })
);

Message.defaultProps = {
    p: 2,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
};
