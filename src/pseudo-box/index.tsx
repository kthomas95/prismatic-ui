import styled, { CSSObject, Interpolation } from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { Box, StyledBoxProps } from "../box";
import { Theme } from "styled-system";

export interface PseudoBoxProps {
    _hover?: SystemStyleObject;
    _active?: SystemStyleObject;
    _focus?: SystemStyleObject;
    _focusWithin?: SystemStyleObject;
}

export type PseudoBox<T = {}, P = any> = Box<PseudoBoxProps & T, P>;
export const PseudoBox: PseudoBox = styled(Box)<
    PseudoBoxProps & StyledBoxProps
>(
    ({ _hover, _active, _focus, _focusWithin }: PseudoBoxProps) =>
        css({
            "&:hover": _hover,
            "&:active": _active,
            "&:focus": _focus,
            "&:focus-within": _focusWithin,
        } as SystemStyleObject) as Interpolation<any>
);
