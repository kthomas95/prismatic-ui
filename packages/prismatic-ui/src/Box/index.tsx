/** @jsx jsx */
import origStyled, { CreateStyled } from "@emotion/styled";
import {
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    border,
    position,
    shadow,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BorderProps,
    PositionProps,
    ShadowProps
} from "styled-system";
import { motion } from "framer-motion";
import toCss, { SystemCssProperties } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";
import { Theme } from "../Theme";
import { InterpolationWithTheme } from "@emotion/core";

export const styled = origStyled as CreateStyled<Theme>;

export interface BoxProps
    extends SpaceProps,
        ColorProps,
        FlexboxProps,
        GridProps,
        LayoutProps,
        TypographyProps,
        BorderProps,
        PositionProps,
        ShadowProps,
        React.RefAttributes<any>,
        React.AllHTMLAttributes<any> {
    as?: React.ElementType;
    _css?: SystemCssProperties;
    color?: any;
}

export const Box = origStyled("div", {
    shouldForwardProp
})<BoxProps>(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    border,
    position,
    shadow,
    ({ _css }) => toCss(_css)
);

export const MotionBox = motion.custom(Box);
