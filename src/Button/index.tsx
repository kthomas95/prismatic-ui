import PseudoBox from "../PseudoBox";
import React, { forwardRef } from "react";

const SolidProps = color => ({
    bg: `${color}.400`,
    border: 0,
    _hover: {
        bg: `${color}.300`
    },
    _active: {
        transform: "translateX(-2px)"
    }
});

const OutlineProps = color => ({
    bg: "transparent",
    border: "solid 1px",
    borderColor: `${color}.800`,
    _hover: {
        boxShadow: 2
    },
    _active: {
        transform: "translateX(-1px)"
    }
});

const Button = forwardRef(
    ({ colors = "gray", outline = false, ...rest }, ref) => (
        <PseudoBox
            {...(outline ? OutlineProps(colors) : SolidProps(colors))}
            {...rest}
        />
    )
);

Button.displayName = "Button";

Button.defaultProps = {
    display: "flex",
    p: 2,
    borderRadius: 1,
    as: "button",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 1,
    boxShadow: 1,
    colors: "gray",
    fontWeight: 700,
    colorOffset: 0
};

export default Button;
