import { StyledBoxProps, Box } from "../box";
import React from "react";

export const TextVariants = [
    "label",
    "xs",
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
] as const;

// export type TextVariant = "label" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
export type TextVariant = typeof TextVariants[number];

const TextStyles: Record<TextVariant, StyledBoxProps> = {
    label: {
        fontSize: ".83em",
        fontWeight: 800,
        letterSpacing: "-.0375em",
        fontStyle: "italic",
        _css: { fontVariant: "all-petite-caps" },
    },
    xs: { fontSize: ".63em" },
    sm: { fontSize: ".75em" },
    base: { fontSize: "1em" },
    lg: { fontSize: "1.5em" },
    xl: { fontSize: "2em" },
    "2xl": { fontSize: "2.75em" },
};

interface TextProps {
    variant: TextVariant;
}

export type Text = Box<TextProps>;

export const Text: Text = ({ variant, ...props }) => (
    <Box {...{ ...TextStyles[variant], ...props }} />
);
