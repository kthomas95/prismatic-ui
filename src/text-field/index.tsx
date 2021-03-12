import { CSSObject, SystemStyleObject } from "@styled-system/css";
import React, { forwardRef } from "react";
import { Box } from "../box";
import { PseudoBox, PseudoBoxProps } from "../pseudo-box";

interface TextFieldProps {
    variantColor?: string;
}

const StyleTextfield = (variantColor: string) =>
    ({
        borderColor: `${variantColor}.a50`,
        _hover: { borderColor: `${variantColor}.a100` },
        _focus: {
            boxShadow: "md",
            borderColor: `${variantColor}.100`,
            bg: "background.100",
        },
    } as SystemStyleObject);

export const TextField: PseudoBox<
    TextFieldProps,
    HTMLInputElement
> = forwardRef(({ _css, variantColor = "primary", ...props }, ref) => {
    const { _active, _hover, _focus, ...styleProps } = StyleTextfield(
        variantColor
    );
    return (
        <Box
            _css={{
                px: 2,
                py: 1,
                color: "text.500",
                bg: "background.300",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: 4,
                ":active": _active,
                ":hover": _hover,
                ":focus": _focus,
                ...styleProps,
                ..._css,
            }}
            ref={ref}
            {...props}
        />
    );
});

TextField.defaultProps = {
    as: "input",
    type: "text",
};
