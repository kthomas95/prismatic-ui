import css, { CSSObject, SystemStyleObject } from "@styled-system/css";
import { DOMAttributes } from "react";
import styled, {
    StyledComponent,
    StyledComponentBase,
    StyledComponentProps,
    StyledComponentInnerAttrs,
    ThemedStyledFunction,
} from "styled-components";
import { system, textStyle } from "styled-system";

type GenericProps = Parameters<StyledComponent<any, any>>[0];
export interface WithCSS extends Pick<GenericProps, "as"> {
    _css?: SystemStyleObject;

    // bg?: ResponsiveValue<ColorValue | "transparent">;
}

export const Box = styled("div")<WithCSS>(
    (props) => css(props._css),
    textStyle
);

export type Box<T extends {} = {}> = React.FC<WithCSS & T & DOMAttributes<any>>;
