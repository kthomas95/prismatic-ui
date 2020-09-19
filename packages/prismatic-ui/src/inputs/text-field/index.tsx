import React, { forwardRef } from "react";
import { PseudoBox } from "../../primatives/pseudo-box";

interface TextFieldProps {}

export const TextField: PseudoBox<
    TextFieldProps,
    HTMLInputElement
> = forwardRef(({ _css, ...props }, ref) => (
    <PseudoBox
        ref={ref}
        {...{
            ...props,
        }}
    />
));

TextField.defaultProps = {
    as: "input",
    type: "text",
    px: 2,
    py: 1,
    bg: "background.main",
    _hover: { borderColor: "primary.darkalpha" },
    _focus: { boxShadow: 1, borderColor: "primary.main" },
    color: "text.main",
    border: "solid 1px",
    borderColor: "alpha",
    borderRadius: 4,
};
