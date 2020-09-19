import React from "react";
import { Box } from "../../primatives";

interface BadgeProps {
    variantColor?: string;
}

// export const Badge = styled(Box)<BadgeProps>(
//     ({ theme, variantColor = "primary", ...props }) => ({
//         backgroundColor: theme.colors[variantColor].main,
//         color: theme.colors[variantColor].text
//     })
// );

export const Badge: Box<BadgeProps> = ({
    variantColor = "primary",
    _css,
    ...props
}) => (
    <Box
        {...{
            bg:
                variantColor === "text"
                    ? "text.verylight"
                    : `${variantColor}.alpha.dark`,
            color: variantColor === "text" ? "background.main" : "inherit",

            _css: { ..._css, textTransform: "uppercase" },
            ...props,
        }}
    />
);

Badge.defaultProps = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    p: 1,
    boxShadow: 1,
    fontSize: "xs",
    borderRadius: 3,
    fontWeight: 700,
};
