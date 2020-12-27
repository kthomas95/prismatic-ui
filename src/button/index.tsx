import { CSSObject } from "@styled-system/css";
import { merge } from "lodash";
import React, { forwardRef, PropsWithChildren } from "react";
import { Box, WithCSS } from "../box";
import { PseudoBox } from "../pseudo-box";
import { makeStyles, WithVariantColor } from "../system";
export type ButtonVariant = "default" | "outline" | "ghost";

export interface ButtonProps extends WithVariantColor {
    variant?: ButtonVariant;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
}
export type Button<T> = PseudoBox<ButtonProps & T>;


const getButtonStyles = makeStyles((color) => ({
    default: {
        color: `${color}.text` as const,
        bg: `${color}.500` as const,
        borderColor: `${color}.500`,
        boxShadow: "sm",
        ":hover": {
            bg: `${color}.300`,
            color: `${color}.text`,
            borderColor: `${color}.300`,
            boxShadow: "md",
        },
        ":active": {
            bg: `${color}.100`,
            borderColor: `${color}.100`,
            boxShadow: "lg",
            outline: "none",
        },

        ":focus": {
            outline: "none",
        },
    },
    outline: {
        borderColor: `${color}.500`,
        // color: color === "background" ? "text.light" : `${color}.main`,
        color: `${color}.500`,
        boxShadow: "sm",
        bg: "transparent",
        ":hover": {
            bg: `${color}.a50`,
            boxShadow: "md",
            // borderColor: `${color}.100`,
            // color: `${color}.text`,
            // color: `text.dark`
        },
        ":active": {
            boxShadow: "lg",
            bg: `${color}.a100`,
        },
    },
    ghost: {
        borderColor: "transparent",
        // bg: `${color}.alpha.light`,
        bg: "transparent",
        color: `${color}.500`,
        boxShadow: "sm",
        // color: `${color}.main`,
        ":hover": {
            // color: `${color}.text`,
            bg: `${color}.a50`,
            boxShadow: "md",
        },
        ":active": {
            bg: `${color}.a100`,
            boxShadow: "lg",
            // boxShadow: 1
        },
    },
}));



const defaultButtonProps: CSSObject = {
    p: 2,
    fontSize: "xs",
    fontFamily: "inherit",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: "1px",
    fontWeight: 700,
};

export const Button = forwardRef<
    HTMLButtonElement,
    PropsWithChildren<WithCSS & ButtonProps>
>(
    (
        {
            _css,
            leftIcon,
            rightIcon,
            children,
            variantColor = "primary",
            variant = "default",
            ...props
        },
        ref
    ) => (
        <Box
            as="button"
            ref={ref}
            _css={merge(
                { ...defaultButtonProps },
                getButtonStyles({ variant, variantColor }),
                _css
            )}
            {...props}
        >
            {leftIcon && <Box as={leftIcon} mr={2} />}
            {children}
            {rightIcon && <Box as={rightIcon} ml={2} />}
        </Box>
    )
);
