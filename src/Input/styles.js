import { get } from "styled-system";

const outlinedStyle = ({ theme, colorMode, errorBorderColor }) => {
    const bg = { light: "white", dark: "whiteAlpha.100" };
    const borderColor = { light: "inherit", dark: "whiteAlpha.50" };
    const hoverColor = { light: "gray.300", dark: "whiteAlpha.200" };

    /**
     * styled-system's get takes 3 args
     * - object or array to read from
     * - key to get
     * - fallback value
     */
    // const _focusBorderColor = get(
    //     theme.colors,
    //     focusBorderColor,
    //     focusBorderColor // If color doesn't exist in theme, use it's raw value
    // );
    // const _errorBorderColor = get(
    //     theme.colors,
    //     errorBorderColor,
    //     errorBorderColor
    // );

    return {
        ...readOnly,
        border: "solid 1px",
        borderColor: "neutral.400",
        bg: "neutral.300",
        _hover: {
            borderColor: "neutral.500"
        },
        _disabled: {
            opacity: "0.4",
            cursor: "not-allowed"
        },
        _focus: {
            borderColor: "blue.700",
            boxShadow: "focusring"
        },
        _invalid: {
            // borderColor: _errorBorderColor,
            // boxShadow: `0 0 0 1px ${_errorBorderColor}`
        }
    };
};

const readOnly = {
    _readOnly: {
        bg: "transparent",
        boxShadow: "none !important",
        userSelect: "all"
    }
};

const filledStyle = ({
    theme,
    focusBorderColor,
    errorBorderColor,
    colorMode
}) => {
    const bg = { light: "neutral.100", dark: "whiteAlpha.50" };
    const hoverColor = { light: "neutral.200", dark: "whiteAlpha.100" };

    // const _focusBorderColor = get(
    //     theme.colors,
    //     focusBorderColor,
    //     focusBorderColor
    // );
    // const _errorBorderColor = get(
    //     theme.colors,
    //     errorBorderColor,
    //     errorBorderColor
    // );

    return {
        ...readOnly,
        border: "2px",
        borderColor: "transparent",
        bg: "neutral.400",
        _hover: {
            bg: hoverColor[colorMode]
        },
        _disabled: {
            opacity: "0.4",
            cursor: "not-allowed"
        },
        _focus: {
            bg: "transparent"
            // borderColor: _focusBorderColor
        },
        _invalid: {
            // borderColor: _errorBorderColor
        }
    };
};

const flushedStyle = ({ theme, focusBorderColor, errorBorderColor }) => {
    // const _focusBorderColor = get(
    //     theme.colors,
    //     focusBorderColor,
    //     focusBorderColor
    // );
    // const _errorBorderColor = get(
    //     theme.colors,
    //     errorBorderColor,
    //     errorBorderColor
    // );

    return {
        ...readOnly,
        borderBottom: "2px",
        borderColor: "inherit",
        rounded: 0,
        px: undefined,
        bg: "transparent",
        _focus: {
            // borderColor: _focusBorderColor
        },
        _invalid: {
            // borderColor: _errorBorderColor
        }
    };
};

const unstyledStyle = {
    bg: "transparent",
    px: undefined,
    height: undefined
};

const variantProps = props => {
    switch (props.variant) {
        case "flushed":
            return flushedStyle(props);
        case "unstyled":
            return unstyledStyle;
        case "filled":
            return filledStyle(props);
        case "outline":
            return outlinedStyle(props);
        default:
            return {};
    }
};

const baseProps = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    transition: "all 0.2s",
    outline: "none"
};

export const inputSizes = {
    lg: {
        fontSize: 3,
        px: 4,
        lineHeight: "3rem",
        borderRadius: 2
    },
    md: {
        fontSize: 2,
        px: 4,
        lineHeight: "2.5rem",
        borderRadius: 1
    },
    sm: {
        fontSize: 1,
        px: 3,
        lineHeight: "2rem",
        borderRadius: 1
    }
};

const sizeProps = props => inputSizes[props.size];

const useInputStyle = props => {
    const _props = { ...props };

    return {
        width: props.isFullWidth ? "100%" : undefined,
        ...baseProps,
        ...sizeProps(_props),
        ...variantProps(_props)
        // pb: "1px"
    };
};

export default useInputStyle;
