import styled from "styled-components";
import css, {
    SystemCssProperties,
    CSSPseudoSelectorProps,
    SystemStyleObject,
} from "@styled-system/css";
import { Box } from "../../primatives";
import { CSSObject } from "@emotion/core";
import { StyledBoxProps } from "../box";

export interface PseudoBoxProps {
    _hover?: SystemCssProperties;
    _active?: SystemCssProperties;
    _focus?: SystemCssProperties;
    _focusWithin?: SystemCssProperties;
}

export type PseudoBox<T = {}, P = any> = Box<PseudoBoxProps & T, P>;
export const PseudoBox: PseudoBox = styled(Box)<
    PseudoBoxProps & StyledBoxProps
>(({ _hover, _active, _focus, _focusWithin }) =>
    css({
        "&:hover": _hover,
        "&:active": _active,
        "&:focus": _focus,
        "&:focus-within": _focusWithin,
    } as SystemStyleObject)
);
