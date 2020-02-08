import React, { forwardRef } from "react";

import { Box, BoxProps } from "../Box";
import { TextField } from "../TextField";
import { PseudoBox, PseudoBoxProps } from "../PseudoBox";
import { useSpring, animated } from "react-spring";

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
    _focus
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
    const styles = useSpring({
        height: open ? height : 0,
        padding: open ? resultBoxPadding : 0,
        borderTopWidth: open ? 1 : 0
    });
    return (
        <Box
            maxHeight={inputHeight}
            {...{
                ...wrapperProps
            }}
        >
            <PseudoBox
                {...{
                    bg,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "alpha",
                    ...props
                }}
                display="flex"
                flexDirection="column"
                overflow="hidden"
                {...{
                    _focusWithin: _focus
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
                    onChange={e => setText(e.target.value)}
                    color="inherit"
                    value={value}
                    // type="text"
                    // {...{ value, ...inputProps }}
                />
                <Box
                    as={animated.div}
                    style={styles}
                    // overflowX="auto"
                    bg={bg}
                    zIndex={1000}
                    borderTopStyle="solid"
                    borderColor="alpha"
                    // bg="primary.verylight"
                    {...resultBoxProps}
                >
                    {open && children}
                </Box>
            </PseudoBox>
        </Box>
    );
};

Autocomplete.defaultProps = {
    _focus,
    borderRadius: 6
};
