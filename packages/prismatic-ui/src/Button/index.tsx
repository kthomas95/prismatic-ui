import React, { forwardRef } from "react";
import { Theme, Color } from "../Theme";
import { BoxProps, Box } from "../Box";
import { PseudoBox, PseudoBoxProps } from "../PseudoBox";
import { StyledComponent, CreateStyledComponentBase } from "@emotion/styled";
import { motion } from "framer-motion";

interface ButtonProps {
    variantColor?: string;
    variant?: "default" | "outline";
}

const StyleeButton = (colors: Color, variant: ButtonProps["variant"]): {} =>
    variant === "default"
        ? {
              "&:active": {
                  backgroundColor: colors.verylight,
                  borderColor: colors.verylight
              }
          }
        : {
              borderColor: colors.light,
              color: colors.dark,
              backgroundColor: "transparent",
              "&:hover": {
                  backgroundColor: colors.light,
                  color: colors.text
              }
          };

// export const Button = styled(Box)<ButtonProps>(
//     ({ theme, variantColor = "primary", variant = "default" }) =>
//         StyleButton(theme.colors[variantColor], variant),
//     props => ({
//         "&:active": {
//             boxShadow: props.theme.shadows[3]
//         }
//     })
// );

const StyleButton = (color, variant) =>
    variant === "default"
        ? {
              regularStyles: {
                  color: color === "background" ? "text.main" : `${color}.text`,
                  bg: `${color}.main`,
                  borderColor: `${color}.main`
              },
              hoverStyles: {
                  bg: `${color}.light`,
                  borderColor: `${color}.light`
              },
              activeStyles: {
                  bg: `${color}.verylight`,
                  borderColor: `${color}.verylight`,
                  boxShadow: 2
              }
          }
        : {
              regularStyles: {
                  borderColor: `${color}.main`,
                  color: `${color}.main`,
                  bg: "transparent"
              },
              hoverStyles: {
                  bg: `${color}.main`,
                  color: `${color}.text`
              },
              activeStyles: { boxShadow: 2 }
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
    fontSize: "sm",
    fontFamily: "inherit",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    border: "solid 1px",
    boxShadow: 1,
    fontWeight: 700
};
