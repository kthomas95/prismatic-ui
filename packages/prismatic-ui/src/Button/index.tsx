import React, { forwardRef } from "react";
import { Theme, Color } from "../Theme";
import { BoxProps, Box } from "../Box";
import { PseudoBox, PseudoBoxProps } from "../PseudoBox";
import { StyledComponent, CreateStyledComponentBase } from "@emotion/styled";
import { motion } from "framer-motion";

type ButtonVariant = "default" | "outline" | "ghost";

interface ButtonProps {
    variantColor?: string;
    variant?: ButtonVariant;
}

const SolidButton = color => ({
    regularStyles: {
        color: color === "background" ? "text.main" : `${color}.text`,
        bg: `${color}.main`,
        borderColor: `${color}.main`,
        boxShadow: 0
    },
    hoverStyles: {
        bg: `${color}.light`,
        color: `${color}.text`,
        borderColor: `${color}.light`,
        boxShadow: 1
    },
    activeStyles: {
        bg: `${color}.verylight`,
        borderColor: `${color}.verylight`,
        boxShadow: 2
    }
});

const OutlineButton = color => ({
    regularStyles: {
        borderColor: `${color}.main`,
        color: `${color}.main`,
        boxShadow: 0,
        bg: "transparent"
    },
    hoverStyles: {
        bg: `${color}.lightalpha`,
        boxShadow: 1
        // color: `text.dark`
    },
    activeStyles: {
        boxShadow: 2,
        bg: `${color}.darkalpha`
    }
});

const GhostButton = color => ({
    regularStyles: {
        borderColor: "transparent",
        bg: "transparent",
        color: `${color}.main`
    },
    hoverStyles: {
        // color: `${color}.text`,
        bg: `${color}.lightalpha`,
        color: "text.main"
        // boxShadow: 0
    },
    activeStyles: {
        bg: `${color}.darkalpha`
        // boxShadow: 1
    }
});

const StyleButton = (color, variant: ButtonVariant) => {
    const styles = {
        default: SolidButton,
        outline: OutlineButton,
        ghost: GhostButton
    };

    return styles[variant](color);
};

// export const Button: StyledComponent<
//     ButtonProps,
//     ButtonProps & PseudoBoxProps & BoxProps,
//     Theme
// > = ({
export const Button: React.FC<BoxProps &
    ButtonProps &
    PseudoBoxProps> = forwardRef(
    (
        {
            _css,
            _hover,
            _active,
            variantColor = "primary",
            variant = "default",
            leftIcon,
            rightIcon,
            children,
            ...props
        },
        ref
    ) => {
        const { regularStyles, hoverStyles, activeStyles } = StyleButton(
            variantColor,
            variant
        );
        return (
            <PseudoBox
                ref={ref}
                {...{
                    ...props,
                    _css: { ...regularStyles, ..._css },
                    _hover: { ...hoverStyles, ..._hover },
                    _active: { ...activeStyles, ..._active }
                }}
            >
                {leftIcon && <Box as={leftIcon} mr={2} />}
                {children}
                {rightIcon && <Box as={rightIcon} ml={2} />}
            </PseudoBox>
        );
    }
);

export const IconButton = ({
    icon: Icon,
    size,
    width = "1em",
    height = "1em",
    ...props
}) => (
    <Button {...{ width, height, fontSize: size, ...props }}>
        <Icon fontSize=".5em" />
    </Button>
);

IconButton.defaultProps = {
    borderRadius: "50%",
    size: "2.5em"
    // height: "2.5em",
    // width: "2.5em"
};

export const MotionButton = motion.custom(Button);

Button.defaultProps = {
    as: "button",
    p: 2,
    fontSize: "xs",
    fontFamily: "inherit",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    border: "solid 1px",
    fontWeight: 700
};
