import React, { forwardRef } from "react";
import { Theme, Color } from "../Theme";
import { BoxProps } from "../Box";
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
                  color: `${color}.text`,
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
            />
        );
    }
);

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
