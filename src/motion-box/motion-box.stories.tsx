import { useState } from "react";
import { Box, MotionBox, useTheme } from "../";

export default { title: "Layout/Motion Box" };

export const motionBox = () => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    return (
        <Box>
            <MotionBox
                _css={{
                    bg: "error.500",
                    p: 2,
                    boxShadow: "md",
                    borderRadius: 4,
                    display: "flex",
                    placeItems: "center",
                }}
                onClick={() => setExpanded((value) => !value)}
                animate={{
                    height: expanded ? 400 : 100,
                    background: expanded
                        ? theme.colors.success[500]
                        : theme.colors.success.a100,
                }}
                initial={{ height: 100, background: theme.colors.success.a100 }}
            >
                <h3>Click to Expand</h3>
            </MotionBox>
        </Box>
    );
};
