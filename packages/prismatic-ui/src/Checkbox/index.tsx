import React from "react";
import { Box } from "../Box";
import { FiCheck, FiMinus } from "react-icons/fi";
import { PseudoBox } from "../PseudoBox";

export const Checkbox = ({
    children,
    checked,
    onChange,
    indeterminate,
    checkIcon = FiCheck,
    variantColor = "primary",
    userSelect = "none",
    ...props
}) => (
    <Box
        as="label"
        display="inline-flex"
        alignItems="center"
        _css={{
            verticalAlign: "middle",
            userSelect: "none",
            cursor: "pointer"
        }}
        {...props}
    >
        <Box
            as="input"
            type="checkbox"
            {...{ checked, onChange }}
            opacity={0}
            position={"absolute"}
        />
        <PseudoBox
            height="1.15em"
            width="1.15em"
            flexShrink={0}
            mr={children ? 2 : 0}
            border="solid 1px"
            borderRadius={4}
            color={checked ? `${variantColor}.text` : "transparent"}
            borderColor={checked ? `${variantColor}.dark` : "alpha"}
            display="inline-flex"
            _css={{
                transition: "background-color .3s, border-color .3s, color .3s"
            }}
            justifyContent="center"
            alignItems="center"
            bg={checked ? `${variantColor}.light` : "transparent"}
            children={
                checked ? (
                    <Box
                        as={indeterminate ? FiMinus : checkIcon}
                        strokeWidth={3}
                    />
                ) : null
            }
        />
        {children}
    </Box>
);
