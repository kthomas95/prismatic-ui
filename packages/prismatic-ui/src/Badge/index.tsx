import React from "react";

import { Box, styled, BoxProps } from "../Box";

interface BadgeProps {
    variantColor: string;
}

// export const Badge = styled(Box)<BadgeProps>(
//     ({ theme, variantColor = "primary", ...props }) => ({
//         backgroundColor: theme.colors[variantColor].main,
//         color: theme.colors[variantColor].text
//     })
// );

export const Badge: React.FC<BadgeProps & BoxProps> = ({
    variantColor,
    _css,
    ...props
}) => (
    <Box
        {...{
            bg: `${variantColor}.main`,
            color: `${variantColor}.text`,
            _css: { ..._css, textTransform: "uppercase" },
            ...props
        }}
    />
);

Badge.defaultProps = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    p: 1,
    boxShadow: 2,
    fontSize: "xs",
    borderRadius: 3,
    fontWeight: 700
};
