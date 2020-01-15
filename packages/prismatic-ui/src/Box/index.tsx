import styled from "@emotion/styled";
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
    FlexProps,
    GridProps,
    BorderProps,
    PositionProps,
    ShadowProps
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";

export interface BoxProps {
    // children: React.ReactNode;
    color?: any;
}

export const Box: React.FC<BoxProps &
    ColorProps &
    SpaceProps &
    ColorProps &
    TypographyProps &
    LayoutProps &
    FlexProps &
    GridProps &
    BorderProps &
    PositionProps &
    ShadowProps> = styled("div", { shouldForwardProp })(
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
