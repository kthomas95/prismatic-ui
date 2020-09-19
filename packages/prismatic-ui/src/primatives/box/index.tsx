// import origStyled, { CreateStyled } from "@emotion/styled";
import styled from "styled-components";
import {
    space,
    color,
    layout,
    flexbox,
    typography,
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
    ShadowProps,
} from "styled-system";
import { motion, MotionProps } from "framer-motion";
import { SystemCssProperties } from "@styled-system/css";
import React from "react";
import { Theme } from "../../system";

export type StyledBoxProps = SpaceProps &
    ColorProps &
    FlexboxProps &
    GridProps &
    LayoutProps &
    TypographyProps &
    BorderProps &
    ShadowProps<Theme> &
    PositionProps & {
        _css?: SystemCssProperties;
        as?: React.ElementType;
        color?: any;
    };

export interface BoxProps extends StyledBoxProps, React.DOMAttributes<any> {
    // React.RefAttributes<any>,
    // as?: React.ElementType;
}

export type Box<T = {}, P = any> = React.FC<
    StyledBoxProps &
        React.DOMAttributes<P> &
        Omit<React.AllHTMLAttributes<P>, "width" | "height" | "size" | "as"> &
        T &
        React.RefAttributes<P>
>;
export const Box: Box = styled("div")<StyledBoxProps>(
    space,
    layout,
    flexbox,
    color,
    typography,
    grid,
    position,
    border,
    shadow
);

export type MotionBox<T = {}> = React.FC<
    StyledBoxProps & MotionProps & T & Pick<React.DOMAttributes<any>, "onClick">
>;
export const MotionBox: MotionBox = motion.custom<StyledBoxProps>(Box);
