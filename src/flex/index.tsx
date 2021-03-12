import { textStyle } from "styled-system";
import { Box } from "../box";

interface FlexProps {
    centered?: boolean;
    vertical?: boolean;
}

export const Flex: Box<FlexProps> = ({
    centered = false,
    vertical = false,
    _css,

    ...props
}) => (
    <Box
        _css={{
            display: "flex",
            ...(centered
                ? { justifyContent: "center", alignItems: "center" }
                : {}),
            ...(vertical ? { flexDirection: "column" } : {}),
            ..._css,
        }}
        {...props}
    />
);

Flex.displayName = "Flex";
