import React, { forwardRef } from "react";
import { Box, PseudoBox } from "../../primatives";
import { StyleButton } from "./button-styles";
import { StyledBoxProps } from "../../primatives/box";
import { PseudoBoxProps } from "../../primatives/pseudo-box";

export type ButtonVariant = "default" | "outline" | "ghost";

export interface ButtonProps {
    variantColor?: string;
    variant?: ButtonVariant;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
}

export const Button: Box<ButtonProps & PseudoBoxProps> = forwardRef<
    any,
    ButtonProps & PseudoBoxProps
>(
    (
        {
            _hover,
            _active,
            _focus,
            variantColor = "primary",
            variant = "default",
            children,
            ...props
        },
        ref
    ) => {
        const {
            regularStyles,
            hoverStyles,
            activeStyles,
            focusStyles,
        } = StyleButton(variantColor, variant);

        return (
            <PseudoBox
                ref={ref}
                {...{
                    ...regularStyles,
                    ...props,
                    // _css: { ...regularStyles },
                    _hover: { ...hoverStyles, ..._hover },
                    _active: { ...activeStyles, ..._active },
                    _focus: { ...focusStyles, ..._focus },
                }}
            >
                {props.leftIcon && <Box as={props.leftIcon} mr={2} />}
                {children}
                {props.rightIcon && <Box as={props.rightIcon} ml={2} />}
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
    size: "2.5em",
    // height: "2.5em",
    // width: "2.5em"
};

// export const MotionButton = motion.custom(Button);

Button.defaultProps = {
    as: "button",
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
