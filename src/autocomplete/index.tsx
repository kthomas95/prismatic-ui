import React, { forwardRef, FormEvent } from "react";

import { TextField } from "../text-field";
import { PseudoBox, PseudoBoxProps } from "../pseudo-box";
import { ResponsiveValue } from "styled-system";
import { SystemCssProperties, SystemStyleObject } from "@styled-system/css";
import { CSSObject } from "styled-components";
import { StyledBoxProps, Box, MotionBox } from "../box";

interface AutocompleteProps {
    open: boolean;
    height?: number;
    resultBoxProps?: StyledBoxProps;
    value: string;
    resultBoxPadding?: number;
    onChange?: (e: FormEvent<"input">) => void;
    inputProps?: object;
    _focus?: SystemStyleObject;
    setText: any;
    inputHeight?: ResponsiveValue<string | number>;
    wrapperProps?: StyledBoxProps;
}

const {
    border,
    borderColor,
    borderRadius,
    _hover,
    _focus,
} = TextField.defaultProps;

export const Autocomplete: Box<AutocompleteProps> = ({
    value,
    height = 128,
    open,
    resultBoxProps = {},
    inputProps = {},
    resultBoxPadding = 8,
    bg = "background.100",
    children,
    setText,
    inputHeight = "2rem",
    wrapperProps,
    ...props
}) => {
    return (
        <Box
            maxHeight={inputHeight}
            minWidth={0}
            {...{
                ...wrapperProps,
            }}
        >
            <PseudoBox
                {...{
                    bg,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "alpha",
                    ...props,
                }}
                display="flex"
                flexDirection="column"
                overflow="hidden"
                {...{
                    _focusWithin: _focus,
                }}
            >
                <Box
                    as="input"
                    bg="transparent"
                    pl={2}
                    py={1}
                    height={inputHeight}
                    fontSize="base"
                    border={0}
                    onChange={(e) =>
                        setText((e.currentTarget as HTMLInputElement).value)
                    }
                    color="inherit"
                    value={value}
                    // type="text"
                    // {...{ value, ...inputProps }}
                />
                <MotionBox
                    animate={{
                        height: open ? height : 0,
                        borderTopWidth: open ? 1 : 0,
                    }}
                    border={0}
                    bg={bg}
                    zIndex={1000}
                    borderTopStyle="solid"
                    borderColor="alpha"
                    {...resultBoxProps}
                >
                    {open && children}
                </MotionBox>
            </PseudoBox>
        </Box>
    );
};

Autocomplete.defaultProps = {
    _focus,
    borderRadius: 6,
};
