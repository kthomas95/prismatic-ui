const baseProps = {
    userSelect: "none",
    border: "solid 2px",
    borderRadius: 1,
    borderColor: "inherit",
    height: ".75em",
    width: ".75em",
    transition: "background-color 120ms, box-shadow 250ms"
};

const interactionProps = ({ color, colorMode }) => {
    const isDarkMode = colorMode === "dark";
    const _color = isDarkMode ? 200 : 500;
    return {
        color: "neutral.400",
        borderRadius: 1,
        _checked: {
            bg: `${color}.${_color}`,
            borderColor: `${color}.${_color}`,
            color: "neutral.100"
        },
        _checkedAndDisabled: {
            borderColor: isDarkMode ? "transparent" : "gray.200",
            bg: isDarkMode ? "whiteAlpha.300" : "gray.200",
            color: isDarkMode ? "whiteAlpha.500" : "gray.500"
        },
        _disabled: {
            bg: isDarkMode ? "whiteAlpha.100" : "gray.100",
            borderColor: isDarkMode ? "transparent" : "gray.100"
        },
        _focus: {
            boxShadow: "focusring"
        },
        _invalid: {
            borderColor: isDarkMode ? "red.300" : "red.500"
        }
    };
};

const useCheckboxStyle = props => {
    const sizes = {
        lg: 5,
        md: 4,
        sm: props.type === "radio" ? 3 : "auto"
    };

    return {
        ...baseProps,
        // ...(props.size && { borderRadius: 1 }),

        ...interactionProps(props)
        // size: sizes[props.size],
        // size: 5
    };
};

export default useCheckboxStyle;
