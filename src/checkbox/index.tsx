import React, { forwardRef, ElementType } from "react";
import { FiCheck, FiMinus } from "react-icons/fi";
import { Box, WithCSS } from "../box";
import { PseudoBox } from "../pseudo-box";
import { ColorVariant } from "../system";

interface CheckboxProps extends React.DOMAttributes<"input">, WithCSS {
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
            _css,
            ...props
        },
        ref
    ) => (
        <Box
            as="label"
            _css={{
                display: "inline-flex",
                alignItems: "center",
                verticalAlign: "middle",
                userSelect: "none",
                cursor: "pointer",
                ..._css,
            }}
            {...props}
        >
            <Box
                as="input"
                type="checkbox"
                ref={ref}
                {...{ checked, onChange }}
                _css={{ opacity: 0, position: "absolute" }}
            />
            <Box
                _css={{
                    height: "1.15em",
                    width: "1.15em",
                    flexShrink: 0,
                    mr: children ? 2 : 0,
                    border: "solid 1px",
                    borderRadius: 4,
                    color: checked ? "text.900" : "transparent",
                    borderColor: checked ? `${variantColor}.100` : "text.100",
                    display: "inline-flex",
                    transition:
                        "background-color .3s, border-color .3s, color .3s",

                    justifyContent: "center",
                    alignItems: "center",
                    bg: checked
                        ? (`${variantColor}.100` as const)
                        : "transparent",
                }}
                // opacity={0.8}
                children={
                    checked ? (
                        <Box
                            as={indeterminate ? FiMinus : checkIcon}
                            // strokeWidth={3}
                        />
                    ) : null
                }
            />
            <Box _css={{ fontSize: "sm" }}>{children}</Box>
        </Box>
    )
);
