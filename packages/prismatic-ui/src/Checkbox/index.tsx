import React from "react";
import { Box } from "../Box";
import { FiCheck } from "react-icons/fi";

export const Checkbox = ({
    children,
    checked,
    onChange,
    variantColor = "primary",
    userSelect = "none",
    ...props
}) => (
    <Box
        as="label"
        display="inline-flex"
        alignItems="center"
        style={{ userSelect: "none" }}
        {...props}
    >
        <Box
            as="input"
            type="checkbox"
            {...{ checked, onChange }}
            opacity={0}
            position={"absolute"}
        />
        <Box
            height="1.15em"
            width="1.15em"
            mr={2}
            border="solid 1px"
            borderRadius={2}
            color={`${variantColor}.text`}
            borderColor={checked ? `${variantColor}.dark` : "alpha"}
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            bg={checked ? `${variantColor}.light` : "transparent"}
            children={checked ? <FiCheck strokeWidth={3} /> : null}
        />
        {children}
    </Box>
);
