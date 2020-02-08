/** @jsx jsx */
import styled from "@emotion/styled";
import css, {
    SystemCssProperties,
    CSSPseudoSelectorProps,
    SystemStyleObject
} from "@styled-system/css";
import { Box, BoxProps } from "../Box";
import { CSSObject } from "@emotion/core";

export interface PseudoBoxProps extends BoxProps {
    _hover?: SystemCssProperties;
    _active?: SystemCssProperties;
    _focus?: SystemCssProperties;
    _focusWithin?: SystemCssProperties;
}

export const PseudoBox = styled(Box)<PseudoBoxProps>(
    ({ _hover, _active, _focus, _focusWithin }) =>
        css({
            "&:hover": _hover,
            "&:active": _active,
            "&:focus": _focus,
            "&:focus-within": _focusWithin
        } as SystemStyleObject)
);
