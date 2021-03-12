import React from "react";
import { BoxProps, Box } from "../box";

interface StatProps {
    labelProps?: BoxProps;
    valueProps?: BoxProps;
    label: React.ReactNode | JSX.Element;
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
        <Text variant="label" {...labelProps} children={label} />
    </Box>
);

Stat.defaultProps = { textAlign: "center" };
