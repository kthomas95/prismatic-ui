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
import { GlobalProps } from "@emotion/core";
import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";
import { Theme } from "../Theme";

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
        ShadowProps {
    // children: React.ReactNode;
    as?: React.ElementType;
    color?: any;
}

export const Box = styled("div", { shouldForwardProp })<BoxProps>(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    border,
    position,
    shadow
);
