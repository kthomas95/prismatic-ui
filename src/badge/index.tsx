import { CSSObject } from "@styled-system/css";
import { ThemeContext } from "styled-components";
import { ColorVariant, WithVariantColor, Box, makeStyles } from "../";
import { merge } from "lodash";

export interface BadgeProps extends WithVariantColor {
    variantColor?: ColorVariant;
    /** Variant of the badge to display.
     * @default standard
     */
    variant?: "ghost" | "standard";
}

export type Badge<T = {}> = Box<BadgeProps & T>;

const getButtonStyles = makeStyles((color) => ({
    standard: {
        bg: `${color}.100`,
        color: `${color}.text`,
    },
    ghost: {
        bg: color === "text" ? "text.100" : `${color}.a100`,
        color: `${color}.900`,
    },
}));

const defaultProps = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    p: 1,
    fontWeight: 700,
    boxShadow: "md",
    fontSize: "2xs",
    borderRadius: 3,
    textTransform: "uppercase",
} as CSSObject;

export const Badge: Badge = ({
    variantColor = "primary",
    variant = "standard",
    _css,
    ...props
}) => {
    return (
        <Box
            _css={merge(
                { ...defaultProps },
                getButtonStyles({ variant, variantColor }),
                _css
            )}
            {...props}
        />
    );
};
