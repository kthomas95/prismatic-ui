import React, { forwardRef, ElementType } from "react";
import { FiCheck, FiMinus } from "react-icons/fi";
import { Box, StyledBoxProps } from "../box";
import { PseudoBox } from "../pseudo-box";
import { ColorVariant } from "../system";

interface CheckboxProps extends StyledBoxProps, React.DOMAttributes<"input"> {
    checked: boolean;
    indeterminate?: boolean;
    checkIcon?: ElementType;
    variantColor: ColorVariant;
}

export const Checkbox: Box<CheckboxProps> = forwardRef<any, CheckboxProps>(
    (
        {
            children,
            checked,
            onChange,
            indeterminate,
            checkIcon = FiCheck,
            variantColor = "primary",
            ...props
        },
        ref
    ) => (
        <Box
            as="label"
            display="inline-flex"
            alignItems="center"
            _css={{
                verticalAlign: "middle",
                userSelect: "none",
                cursor: "pointer",
            }}
            {...props}
        >
            <Box
                as="input"
                type="checkbox"
                ref={ref}
                {...{ checked, onChange }}
                // opacity={0}
                position={"absolute"}
            />
            <PseudoBox
                height="1.15em"
                width="1.15em"
                flexShrink={0}
                mr={children ? 2 : 0}
                border="solid 1px"
                borderRadius={4}
                color={checked ? `text.900` : "transparent"}
                borderColor={checked ? `${variantColor}.100` : "text.100"}
                display="inline-flex"
                _css={{
                    transition:
                        "background-color .3s, border-color .3s, color .3s",
                }}
                justifyContent="center"
                alignItems="center"
                // opacity={0.8}
                bg={checked ? (`${variantColor}.100` as const) : "transparent"}
                children={
                    checked ? (
                        <Box
                            as={indeterminate ? FiMinus : checkIcon}
                            // strokeWidth={3}
                        />
                    ) : null
                }
            />
            <Box fontSize="sm">{children}</Box>
        </Box>
    )
);
