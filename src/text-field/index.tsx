import React, { forwardRef } from "react";
import { StyledBoxProps } from "../box";
import { PseudoBox, PseudoBoxProps } from "../pseudo-box";

interface TextFieldProps {
    variantColor?: string;
}

const StyleTextfield = (variantColor: string) =>
    ({
        borderColor: `${variantColor}.alpha.medium`,
        _hover: { borderColor: `${variantColor}.alpha.dark` },
        _focus: { boxShadow: 1, borderColor: `${variantColor}.light` },
    } as PseudoBoxProps & StyledBoxProps);

export const TextField: PseudoBox<
    TextFieldProps,
    HTMLInputElement
> = forwardRef(({ _css, variantColor = "primary", ...props }, ref) => {
    const { _active, _hover, _focus, ...styleProps } = StyleTextfield(
        variantColor
    );
    return (
        <PseudoBox
            ref={ref}
            {...{ _active, _hover, _focus, ...styleProps, ...props }}
        />
    );
});

TextField.defaultProps = {
    as: "input",
    type: "text",
    px: 2,
    py: 1,
    color: "text.main",
    bg: "background.500",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: 4,
};
