import React from "react";
import { BoxProps } from "../Box";
import { PseudoBox, PseudoBoxProps } from "../PseudoBox";

export const TextField: React.FC<BoxProps & PseudoBoxProps> = ({
    _css,
    ...props
}) => (
    <PseudoBox
        {...{
            ...props
        }}
    />
);

TextField.defaultProps = {
    as: "input",
    px: 2,
    py: 1,
    bg: "background.verylight",
    _focus: { boxShadow: 1, borderColor: "primary.main" },
    color: "text.verylight",
    border: "solid 1px",
    borderColor: "alpha",
    borderRadius: 4
};
