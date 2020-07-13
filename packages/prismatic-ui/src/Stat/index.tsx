import React from "react";
import { Box, BoxProps } from "../Box";

interface StatProps {
    labelProps?: BoxProps;
    valueProps?: BoxProps;
    label: React.ReactNode;
    value: React.ReactNode;
}

export const Stat: React.FC<BoxProps & StatProps> = ({
    label,
    value,
    labelProps = {},
    valueProps = {},
    ...props
}) => (
    <Box {...{ ...props }}>
        <Box {...{ children: value, ...valueProps }} />
        <Box
            {...{
                fontSize: "sm",
                fontWeight: 800,
                letterSpacing: "-.0375em",
                fontStyle: "italic",
                children: label,
                ...labelProps
            }}
            _css={{ fontVariant: "all-petite-caps" }}
        />
    </Box>
);

Stat.defaultProps = { textAlign: "center" };
