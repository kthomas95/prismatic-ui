import { Box, styled } from "../Box";

interface BadgeProps {
    variantColor: string;
}

export const Badge = styled(Box)<BadgeProps>(
    ({ theme, variantColor = "primary", ...props }) => ({
        backgroundColor: theme.colors[variantColor].main,
        color: theme.colors[variantColor].text
    })
);

Badge.defaultProps = {
    display: "inline-block",
    p: "3px",
    boxShadow: 2,
    fontSize: ".75em",
    borderRadius: 2,
    fontWeight: 700
};
