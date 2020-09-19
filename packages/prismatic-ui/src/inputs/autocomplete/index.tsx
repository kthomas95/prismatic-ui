import React, { forwardRef } from "react";

import { Box, BoxProps, MotionBox } from "../../Box";
import { TextField } from "../text-field";
import { PseudoBox, PseudoBoxProps } from "../../primatives/pseudo-box";
// import { useSpring, animated } from "react-spring";

interface Autocomplete extends PseudoBoxProps {
    open: boolean;
    height?: number;
    resultBoxProps?: BoxProps;
    value: string;
    resultBoxPadding?: number;
    onChange: (e: any) => void;
    inputProps?: object;
}

const {
    border,
    borderColor,
    borderRadius,
    _hover,
    _focus,
} = TextField.defaultProps;

export const Autocomplete: React.FC<Autocomplete> = ({
    value,
    height = 128,
    open,
    resultBoxProps = {},
    inputProps = {},
    resultBoxPadding = 8,
    bg = "background.light",
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
                    onChange={(e) => setText(e.target.value)}
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
                    bg="background.verylight"
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
