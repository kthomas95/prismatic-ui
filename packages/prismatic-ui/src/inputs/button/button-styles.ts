import { StyledBoxProps } from "../../primatives/box";
import { ButtonVariant } from ".";
import { SystemCssProperties } from "@styled-system/css";

type ButtonStyle = {
    regularStyles: StyledBoxProps;
    hoverStyles: SystemCssProperties;
    activeStyles: SystemCssProperties;
    focusStyles?: SystemCssProperties;
};

export const SolidButton = (color: string): ButtonStyle => ({
    regularStyles: {
        color: color === "background" ? "text.main" : `${color}.text`,
        bg: `${color}.main`,
        borderColor: `${color}.main`,
        boxShadow: 0,
    },
    hoverStyles: {
        bg: `${color}.light`,
        color: `${color}.text`,
        borderColor: `${color}.light`,
        boxShadow: 1,
    },
    activeStyles: {
        bg: `${color}.verylight`,
        borderColor: `${color}.verylight`,
        boxShadow: 2,
        outline: "none",
    },

    focusStyles: {
        outline: "none",
    },
});

export const OutlineButton = (color: string): ButtonStyle => ({
    regularStyles: {
        borderColor: `${color}.main`,
        color: color === "background" ? "text.light" : `${color}.main`,
        boxShadow: 0,
        bg: "transparent",
    },
    hoverStyles: {
        bg: `${color}.alpha.light`,
        boxShadow: 1,
        // color: `text.dark`
    },
    activeStyles: {
        boxShadow: 2,
        bg: `${color}.darkalpha`,
    },
});

export const GhostButton = (color): ButtonStyle => ({
    regularStyles: {
        borderColor: "transparent",
        bg: `${color}.alpha.light`,
        color: "text.main",
        // color: `${color}.main`,
    },
    hoverStyles: {
        // color: `${color}.text`,
        bg: `${color}.alpha.medium`,
        color: "text.main",
        // boxShadow: 0
    },
    activeStyles: {
        bg: `${color}.alpha.dark`,
        // boxShadow: 1
    },
});

export const StyleButton = (color, variant: ButtonVariant) => {
    const styles = {
        default: SolidButton,
        outline: OutlineButton,
        ghost: GhostButton,
    } as const;

    return styles[variant](color);
};
