import React, { forwardRef } from "react";
import { Box, styled } from "../Box";
import { Theme, Color } from "../Theme";
import { BoxProps } from "../Box";

interface ButtonProps {
    variantColor?: string;
    variant?: "default" | "outline";
}

const StyleButton = (colors: Color, variant: ButtonProps["variant"]): {} =>
    variant === "default"
        ? {
              backgroundColor: colors.main,
              color: colors.text,
              borderColor: colors.main,
              "&:hover": {
                  backgroundColor: colors.light,
                  borderColor: colors.light
              },
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

export const Button = styled(Box)<ButtonProps>(
    ({ theme, variantColor = "primary", variant = "default" }) =>
        StyleButton(theme.colors[variantColor], variant),
    props => ({
        "&:active": {
            boxShadow: props.theme.shadows[3]
        }
    })
);

Button.defaultProps = {
    as: "button",
    p: 2,
    fontSize: 1,
    fontFamily: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    border: "solid 1px",
    boxShadow: 1,
    fontWeight: 700
};
