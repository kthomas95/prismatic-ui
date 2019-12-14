import PseudoBox from "../PseudoBox";
import React, { forwardRef } from "react";

const SolidProps = (color, offset) => ({
    bg: `${color}.${500 + offset * 100}`,
    color: `${color == "neutral" ? "neutral" : "gray"}.${
        offset > 0 ? 200 : 800
    }`,
    border: 0,
    _hover: {
        boxShadow: "lg",
        bg: `${color}.${offset != -4 ? 400 + offset * 100 : 200}`
    },
    _active: {
        transform: "translateX(-1px)"
    }
});

const OutlineProps = color => ({
    bg: "transparent",
    border: "solid 1px",
    color: `${color}.${color == "neutral" ? 700 : 500}`,
    borderColor: `${color}.500`,
    _hover: {
        boxShadow: "lg",
        borderColor: `${color}.300`,
        fontWeight: 900
    },
    _active: {
        transform: "translateX(-1px)"
    }
});

const Button = forwardRef(
    ({ colors = "gray", outline = false, colorOffset = 0, ...rest }, ref) => (
        <PseudoBox
            {...rest}
            {...(outline
                ? OutlineProps(colors)
                : SolidProps(colors, colorOffset))}
        />
    )
);

Button.displayName = "Button";

Button.defaultProps = {
    display: "flex",
    p: 2,
    borderRadius: 2,
    as: "button",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    appearance: "none",
    fontSize: 1,
    boxShadow: "md",
    colors: "neutral",
    fontFamily: "inherit",
    fontWeight: 800,
    colorOffset: 0,
    transition: "all 250ms",
    userSelect: "none",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    lineHeight: "1.2"
};

export default Button;
