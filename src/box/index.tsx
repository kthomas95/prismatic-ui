import css, { CSSObject } from "@styled-system/css";
import React from "react";
import styled, { StyledComponent } from "styled-components";

export interface WithCSS {
    _css?: CSSObject;
    // bg?: ResponsiveValue<ColorValue | "transparent">;
}

export const Box = styled("div")<WithCSS>((props) => css(props._css));
export type Box<T extends {} = {}> = React.FC<WithCSS & T>;
